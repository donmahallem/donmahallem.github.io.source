/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { HttpClient } from '@angular/common/http';
import { from, map, mergeMap, of, tap, Observable } from 'rxjs';
import { IGithubFileId, UserRepositoriesResponse, UserRepositoryResponse } from '../modal';
import { ServerCacheService } from './server-cache.service';

export class OfflineGithubApiService {
    public readonly API_ENDPOINT: string = 'https://raw.githubusercontent.com/donmahallem/donmahallem.github.io.source/api';
    constructor(private http: HttpClient,
        private cache: ServerCacheService) {
    }

    /**
     *
     * @param username Username
     * @param pageSize Page size
     * @param page Page to query starting at 1
     */
    public getUserRepos(username: string, pageSize: number = 25, page?: number): Observable<UserRepositoriesResponse> {
        const url: string = `${this.API_ENDPOINT}/repos/${page}.json`;
        return this.http.get<UserRepositoriesResponse>(url)
            .pipe(tap((items: UserRepositoriesResponse): void => {
                this.cache.put(items);
            }));
    }

    private getRepoOnline(fullname: string): Observable<UserRepositoryResponse> {
        return this.http.get<UserRepositoryResponse>(`${this.API_ENDPOINT}/repo/${fullname}.json`);
    }

    public getRepo(usernameOrFullname: string, reponame?: string): Observable<UserRepositoryResponse> {
        const mergedReponame: string = reponame ? `${usernameOrFullname}/${reponame}` : usernameOrFullname;
        return from(this.cache.get(mergedReponame))
            .pipe(mergeMap((cachedRepo: UserRepositoryResponse): Observable<UserRepositoryResponse> => {
                if (cachedRepo) {
                    console.log('Got item from cache', mergedReponame);
                    return of(cachedRepo);
                }
                return this.getRepoOnline(mergedReponame)
                    .pipe(mergeMap((repo: UserRepositoryResponse): Observable<UserRepositoryResponse> => {
                        return from(this.cache.put(repo))
                            .pipe(map((): UserRepositoryResponse => {
                                return repo;
                            }));
                    }));
            }));
    }

    public getRawFile<T>(file: IGithubFileId): Observable<T> {
        return this.http.get<T>(`https://raw.githubusercontent.com/${file.username}/${file.reponame}`
            + `/${file.branch ? file.branch : 'master'}/${file.filepath}`);
    }
}
