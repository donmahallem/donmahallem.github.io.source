/*
 * Package @donmahallem/github-page
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */


import { UserRepositoriesResponse, UserRepositoryResponse } from './modal';

export class OfflineDatabase {

    public db: Map<string, UserRepositoryResponse> = new Map();
    public pages: UserRepositoriesResponse[] = [];
    public loaded = false;
}
