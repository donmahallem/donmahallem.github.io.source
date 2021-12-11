/*
 * Package @donmahallem/github-page
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { tap, Observable } from 'rxjs';
import { API_TOKEN } from '../api-endpoint';

const logRatelimit: (title: string, resp: HttpResponse<any> | HttpErrorResponse) => void = (
    title: string,
    resp: HttpResponse<any> | HttpErrorResponse
): void => {
    const keys: string[] = ['x-ratelimit-limit', 'x-ratelimit-used', 'x-ratelimit-reset'];
    console.group(title);
    for (const key of keys) {
        if (resp.headers.has(key)) {
            console.log(`${key}: ${resp.headers.get(key)}`);
        }
    }
    console.groupEnd();
};
/** When accessing api.github.com it does add optional auth headers */
@Injectable({
    providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
    constructor(@Inject(API_TOKEN) public apiToken: string) {
        apiToken ? console.log('An Api Token was provided') : console.log('No Api Token was provided');
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const parsedUrl: URL = new URL(req.url);
        if (parsedUrl.protocol.startsWith('https') && parsedUrl.host.localeCompare('api.github.com') === 0 && this.apiToken) {
            console.log('Auth Header added');
            const authReq: HttpRequest<any> = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${this.apiToken}`),
            });
            return next.handle(authReq).pipe(
                tap(
                    (item: HttpEvent<any>): void => {
                        if (item instanceof HttpResponse) {
                            logRatelimit(`Response Code ${item.status}`, item);
                        }
                    },
                    (err: HttpErrorResponse): void => {
                        if (err.status === 403) {
                            logRatelimit(`Response Code ${err.status}`, err);
                        }
                    }
                )
            );
        }
        return next.handle(req).pipe(tap({ error: console.error }));
    }
}
