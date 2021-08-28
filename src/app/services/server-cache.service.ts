/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { Mutex, MutexInterface } from 'async-mutex';
import { UserRepositoriesResponse, UserRepositoryResponse } from '../modal';
import { OfflineDatabase } from '../offline-database';
import { CacheService } from './cache.service';

export class ServerCacheService extends CacheService {

    private mutex: Mutex = new Mutex();
    constructor(public db: OfflineDatabase) {
        super();
    }

    /**
     *
     * @param username Username
     * @param pageSize Page size
     * @param page Page to query starting at 1
     */
    public async get(id: string): Promise<UserRepositoryResponse> {
        const release: MutexInterface.Releaser = await this.mutex.acquire();
        const result: UserRepositoryResponse = this.db.db.get(id);
        console.log(`Getting cached ${id}. Was ${result ? 'found' : 'not found'}`);
        console.log('Num Keys', Array.from(this.db.db.keys()).length);
        release();
        return result;
    }

    public async getAll(): Promise<UserRepositoriesResponse> {
        const release: MutexInterface.Releaser = await this.mutex.acquire();
        const items: UserRepositoriesResponse = Array.from(this.db.db.values());
        release();
        return items;
    }

    public async put(repos: UserRepositoryResponse | UserRepositoriesResponse): Promise<void> {
        const release: MutexInterface.Releaser = await this.mutex.acquire();
        if (Array.isArray(repos)) {
            console.log(`Inserting ${repos.length} items`);
            for (const repo of repos) {
                this.db.db.set(repo.full_name, repo);
            }
        } else {
            this.db.db.set(repos.full_name, repos);
        }
        release();
    }
}
