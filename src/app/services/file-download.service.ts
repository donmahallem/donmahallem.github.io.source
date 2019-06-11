import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository, GithubFileId } from '../modal';

@Injectable({
    providedIn: 'root',
})
export class FileDownloadService {

    constructor(private http: HttpClient) {

    }

    public getRawFile<T>(url: string): Observable<T> {
        return this.http.get<T>(url);

    }
}
