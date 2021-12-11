/*
 * Package @donmahallem/github-page
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */


import { Injectable } from '@angular/core';
import { from, map, mergeMap, of, Observable } from 'rxjs';
import { UserRepositoriesResponse, UserRepositoryResponse } from '../modal';
import { CacheService } from './cache.service';
import { GithubApiService } from './github-api.service';

@Injectable({
    providedIn: 'root',
})
export class CachedGithubApiService {
    public readonly API_ENDPOINT: string = 'https://api.github.com';
    constructor(private api: GithubApiService, private cacheService: CacheService) { }

    /**
     *
     * @param username Username
     * @param pageSize Page size
     * @param page Page to query starting at 1
     */
    public getUserRepos(username: string, pageSize = 25, page?: number): Observable<UserRepositoriesResponse> {
        return this.api.getUserRepos(username, pageSize, page)
            .pipe(mergeMap((value: UserRepositoriesResponse): Observable<UserRepositoriesResponse> => {
                return from(this.cacheService.put(value))
                    .pipe(map((): UserRepositoriesResponse => {
                        return value;
                    }));
            }));
    }

    public getRepo(usernameOrFullname: string, reponame?: string): Observable<UserRepositoryResponse> {
        const mergedReponame: string = reponame ? `${usernameOrFullname}/${reponame}` : usernameOrFullname;
        return from(this.cacheService.get(mergedReponame))
            .pipe(mergeMap((cachedRepo: UserRepositoryResponse): Observable<UserRepositoryResponse> => {
                if (cachedRepo) {
                    return of(cachedRepo);
                }
                return this.api.getRepo(mergedReponame)
                    .pipe(mergeMap((repo: UserRepositoryResponse): Observable<UserRepositoryResponse> => {
                        return from(this.cacheService.put(repo))
                            .pipe(map((): UserRepositoryResponse => {
                                return repo;
                            }));
                    }));
            }));
    }

}
