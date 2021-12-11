/*
 * Package @donmahallem/github-page
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */


import { Injectable } from '@angular/core';
import { openDB, DBSchema, IDBPDatabase, IDBPObjectStore, IDBPTransaction, StoreNames } from 'idb';
import { UserRepositoriesResponse, UserRepositoryResponse } from '../modal';
import { CacheService } from './cache.service';

interface ICacheDBSchema extends DBSchema {
    repositories: {
        value: UserRepositoryResponse;
        key: string;
        indexes: { 'full_name': string };
    };
}
const KEY_PATH = 'full_name';
type Database = IDBPDatabase<ICacheDBSchema>;
type DatabaseTransaction<NAME extends StoreNames<ICacheDBSchema>[], MODE extends IDBTransactionMode = 'readonly'>
    = IDBPTransaction<ICacheDBSchema, NAME, MODE>;
@Injectable({
    providedIn: 'root',
})
export class BrowserCacheService extends CacheService {

    constructor() {
        super();
    }

    public getDb(): Promise<Database> {
        return openDB('repositories', 1, {
            upgrade(db: Database,
                old: number,
                newVersion: number,
                tx: DatabaseTransaction<'repositories'[], 'versionchange'>): void {
                // Create a store of objects
                const store: IDBPObjectStore<ICacheDBSchema, 'repositories'[], 'repositories', 'versionchange'> =
                    db.createObjectStore('repositories', { autoIncrement: false, keyPath: KEY_PATH });
                // Create an index on the 'date' property of the objects.
                store.createIndex('full_name', KEY_PATH);
            },
        });
    }

    /**
     *
     * @param username Username
     * @param pageSize Page size
     * @param page Page to query starting at 1
     * @param id
     */
    public async get(id: string): Promise<UserRepositoryResponse> {
        const db: Database = await this.getDb();
        const data: UserRepositoryResponse = await db.get('repositories', id);
        db.close();
        return data;
    }

    public async getAll(): Promise<UserRepositoriesResponse> {
        const db: Database = await this.getDb();
        const datas: UserRepositoriesResponse = await db.getAll('repositories');
        db.close();
        return datas;
    }

    public async put(repos: UserRepositoryResponse | UserRepositoriesResponse): Promise<void> {
        const db: Database = await this.getDb();
        if (Array.isArray(repos)) {
            const tx: DatabaseTransaction<['repositories'], 'readwrite'> = db
                .transaction('repositories', 'readwrite', { durability: 'strict' });
            for (const rep of repos) {
                await tx.store.put(rep);
            }
            return tx.done;
        }
        await db.put('repositories', repos);
    }
}
