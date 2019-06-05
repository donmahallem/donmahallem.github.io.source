import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../modal';

@Injectable({
    providedIn: 'root',
})
export class GithubApiService {

    constructor(private http: HttpClient) {

    }

    public getUserRepos(username: string): Observable<Repository[]> {
        return this.http.get<Repository[]>('https://api.github.com/users/' + username + '/repos?per_page=100');
    }

    public getRepo(usernameOrFullname: string, reponame?: string): Observable<Repository> {
        if (reponame) {
            return this.http.get<Repository>('https://api.github.com/repos/' + usernameOrFullname + '/' + reponame);
        } else {
            return this.http.get<Repository>('https://api.github.com/repos/' + usernameOrFullname);
        }

    }
}
