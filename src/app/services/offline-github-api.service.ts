/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_TOKEN } from '../api-endpoint';
import { IGithubFileId, UserRepositoriesResponse, UserRepositoryResponse } from '../modal';


export class OfflineGithubApiService {
    private baseHref: string = 'localhost:56516';
    constructor(private http: HttpClient, @Inject(API_TOKEN) private baseHref2: string) {
    }

    /**
     *
     * @param username Username
     * @param pageSize Page size
     * @param page Page to query starting at 1
     */
    public getUserRepos(username: string, pageSize: number = 25, page?: number): Observable<UserRepositoriesResponse> {
        let url: string = `${this.baseHref}/assets/repos/${page}.json`;
        return this.http.get<UserRepositoriesResponse>(url);
    }

    public getRepo(usernameOrFullname: string, reponame?: string): Observable<UserRepositoryResponse> {
        if (reponame) {
            return this.http.get<UserRepositoryResponse>(`${this.baseHref}/assets/repo/${usernameOrFullname}/${reponame}.json`);
        } else {
            return this.http.get<UserRepositoryResponse>(`${this.baseHref}/assets/repo/${usernameOrFullname}.json`);
        }
    }

    public getRawFile<T>(file: IGithubFileId): Observable<T> {
        return this.http.get<T>(`https://raw.githubusercontent.com/${file.username}/${file.reponame}`
            + `/${file.branch ? file.branch : 'master'}/${file.filepath}`);
    }
}
