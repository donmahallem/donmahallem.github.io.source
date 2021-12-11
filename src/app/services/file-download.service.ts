/*
 * Package @donmahallem/github-page
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FileDownloadService {
    constructor(private http: HttpClient) {}

    public getRawFile<T>(url: string): Observable<T> {
        return this.http.get<T>(url);
    }
}
