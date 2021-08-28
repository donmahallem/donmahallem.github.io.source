/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGithubFileId, UserRepositoriesResponse, UserRepositoryResponse } from '../modal';

export class OfflineGithubApiService {
    public readonly API_ENDPOINT: string = 'https://raw.githubusercontent.com/donmahallem/donmahallem.github.io.source/api';
    constructor(private http: HttpClient) {
    }

    /**
     *
     * @param username Username
     * @param pageSize Page size
     * @param page Page to query starting at 1
     */
    public getUserRepos(username: string, pageSize: number = 25, page?: number): Observable<UserRepositoriesResponse> {
        const url: string = `${this.API_ENDPOINT}/repos/${page}.json`;
        return this.http.get<UserRepositoriesResponse>(url);
    }

    public getRepo(usernameOrFullname: string, reponame?: string): Observable<UserRepositoryResponse> {
        if (reponame) {
            return this.http.get<UserRepositoryResponse>(`${this.API_ENDPOINT}/repo/${usernameOrFullname}/${reponame}.json`);
        } else {
            return this.http.get<UserRepositoryResponse>(`${this.API_ENDPOINT}/repo/${usernameOrFullname}.json`);
        }
    }

    public getRawFile<T>(file: IGithubFileId): Observable<T> {
        return this.http.get<T>(`https://raw.githubusercontent.com/${file.username}/${file.reponame}`
            + `/${file.branch ? file.branch : 'master'}/${file.filepath}`);
    }
}
