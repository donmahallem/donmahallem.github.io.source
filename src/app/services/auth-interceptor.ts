/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import {
    HttpErrorResponse,
    HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { tap, Observable } from 'rxjs';
import { API_TOKEN } from '../api-endpoint';

/** When accessing api.github.com it does add optional auth headers */
@Injectable({
    providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {

    constructor(@Inject(API_TOKEN) public apiToken: string) {
        apiToken ? console.log('An Api Token was provided')
            : console.log('No Api Token was provided');
    }
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        const parsedUrl: URL = new URL(req.url);
        if (parsedUrl.protocol.startsWith('https') &&
            parsedUrl.host.localeCompare('api.github.com') === 0 &&
            this.apiToken) {
            console.log('Auth Header added');
            req.headers.set('Authorization', `Bearer ${this.apiToken}`);
            return next.handle(req)
                .pipe(tap((item: HttpEvent<any>): void => {
                    if (item instanceof HttpResponse) {
                        console.log(item.status, item.headers.keys());
                    } else {
                        console.log(`Response Code`);
                    }
                }, (err: HttpErrorResponse): void => {
                    if (err.status === 403) {
                        const keys: string[] = [
                            'x-ratelimit-limit',
                            'x-ratelimit-used',
                            'x-ratelimit-reset',
                        ];
                        console.group(`Response Error Code ${err.status}`);
                        for (const key of keys) {
                            if (err.headers.has(key)) {
                                console.log(`${key}: ${err.headers.get(key)}`);
                            }
                        }
                        console.groupEnd();
                    }
                }));
        }
        return next.handle(req);
    }
}
