/*
 * Package @donmahallem/github-page
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGithubFileId, UserRepositoriesResponse, UserRepositoryResponse } from '../modal';

@Injectable({
    providedIn: 'root',
})
export class GithubApiService {
    public readonly API_ENDPOINT: string = 'https://api.github.com';
    constructor(private http: HttpClient) {
    }

    /**
     *
     * @param username Username
     * @param pageSize Page size
     * @param page Page to query starting at 1
     */
    public getUserRepos(username: string, pageSize = 25, page?: number): Observable<UserRepositoriesResponse> {
        let url = `${this.API_ENDPOINT}/users/${username}/repos?per_page=${pageSize}`;
        if (page) {
            url += `&page=${page}`;
        }
        return this.http.get<UserRepositoriesResponse>(url);
    }

    public getRepo(usernameOrFullname: string, reponame?: string): Observable<UserRepositoryResponse> {
        if (reponame) {
            return this.http.get<UserRepositoryResponse>(`${this.API_ENDPOINT}/repos/${usernameOrFullname}/${reponame}`);
        } else {
            return this.http.get<UserRepositoryResponse>(`${this.API_ENDPOINT}/repos/${usernameOrFullname}`);
        }
    }

    public getRawFile<T>(file: IGithubFileId): Observable<T> {
        return this.http.get<T>(`https://raw.githubusercontent.com/${file.username}/${file.reponame}`
            + `/${file.branch ? file.branch : 'master'}/${file.filepath}`);
    }
}
