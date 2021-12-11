/*
 * Package @donmahallem/github-page
 * Source https://donmahallem.github.io/donmahallem.github.io.source/
 */


import { UserRepositoriesResponse, UserRepositoryResponse } from '../modal';

export abstract class CacheService {
    /**
     *
     * @param username Username
     * @param pageSize Page size
     * @param page Page to query starting at 1
     */
    abstract get(id: string): Promise<UserRepositoryResponse>;

    abstract getAll(): Promise<UserRepositoriesResponse>;

    abstract put(repos: UserRepositoryResponse | UserRepositoriesResponse): Promise<void>;
}
