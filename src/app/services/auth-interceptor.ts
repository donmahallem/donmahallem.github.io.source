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
        if (parsedUrl.protocol === 'https' &&
            parsedUrl.host === 'api.github.com' &&
            this.apiToken) {
            console.log('Intercept Auth Header');
            req.headers.set('Authorization', `Bearer ${this.apiToken}`);
        }
        return next.handle(req);
    }
}
