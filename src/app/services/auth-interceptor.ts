/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import {
    HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_TOKEN } from '../api-endpoint';

/** Pass untouched request through to the next request handler. */
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
            parsedUrl.host.localeCompare('api.github.com') &&
            this.apiToken) {
            req.headers.set('Authorization', `token ${this.apiToken}`);
        }
        return next.handle(req);
    }
}
