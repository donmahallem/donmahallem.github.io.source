/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGithubFileId, IRepository } from '../modal';

@Injectable({
    providedIn: 'root',
})
export class GithubApiService {

    constructor(private http: HttpClient) {

    }

    /**
     *
     * @param username Username
     * @param pageSize Page size
     * @param page Page to query starting at 1
     */
    public getUserRepos(username: string, pageSize: number = 25, page?: number): Observable<IRepository[]> {
        let url: string = `https://api.github.com/users/${username}/repos?per_page=${pageSize}`;
        if (page) {
            url += `&page=${page}`;
        }
        return this.http.get<IRepository[]>(url);
    }

    public getRepo(usernameOrFullname: string, reponame?: string): Observable<IRepository> {
        if (reponame) {
            return this.http.get<IRepository>(`https://api.github.com/repos/${usernameOrFullname}/${reponame}`);
        } else {
            return this.http.get<IRepository>(`https://api.github.com/repos/${usernameOrFullname}`);
        }

    }

    public getRawFile<T>(file: IGithubFileId): Observable<T> {
        return this.http.get<T>(`https://raw.githubusercontent.com/${file.username}/${file.reponame}`
            + `/${file.branch ? file.branch : 'master'}/${file.filepath}`);

    }
}
