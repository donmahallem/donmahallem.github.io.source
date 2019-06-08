import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository, GithubFileId } from '../modal';

@Injectable({
    providedIn: 'root',
})
export class GithubApiService {

    constructor(private http: HttpClient) {

    }

    /**
     *
     * @param username Username
     * @param page_size Page size
     * @param page Page to query starting at 1
     */
    public getUserRepos(username: string, page_size: number = 25, page?: number): Observable<Repository[]> {
        let url: string = 'https://api.github.com/users/' + username + '/repos?per_page=' + page_size;
        if (page) {
            url += '&page=' + page;
        }
        return this.http.get<Repository[]>(url);
    }

    public getRepo(usernameOrFullname: string, reponame?: string): Observable<Repository> {
        if (reponame) {
            return this.http.get<Repository>('https://api.github.com/repos/' + usernameOrFullname + '/' + reponame);
        } else {
            return this.http.get<Repository>('https://api.github.com/repos/' + usernameOrFullname);
        }

    }

    public getRawFile<T>(file: GithubFileId): Observable<T> {
        return this.http.get<T>('https://raw.githubusercontent.com/' + file.username
            + '/' + file.reponame + '/' + file.branch ? file.branch : 'master' + '/' + file.filepath);

    }
}
