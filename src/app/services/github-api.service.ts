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

    public getRepos(username: string): Observable<Repository[]> {
        return this.http.get<Repository[]>('https://api.github.com/users/' + username + '/repos');
    }
}
