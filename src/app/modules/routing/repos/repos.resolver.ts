/*
 * Package @donmahallem/github-page
 * Source https://donmahallem.github.io/donmahallem.github.io.source/
 */

import { isPlatformBrowser } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserRepositoriesResponse } from 'src/app/modal';
import { GithubApiService } from 'src/app/services';
import { environment } from 'src/environments';

/**
 * Resolves information for a stop provided in the route parameter 'stopId'
 * Redirects to /stops if the server responds with an 404 status
 */
@Injectable()
export class ReposResolver implements Resolve<UserRepositoriesResponse> {
    private readonly INT_REGEX: RegExp = /^([1-9]+|0*[1-9][0-9]+)$/;
    /**
     * Constructor
     *
     * @param platformId
     * @param api the {@ApiService}
     * @param router the {@Router}
     */
    public constructor(@Inject(PLATFORM_ID) public platformId: object, private api: GithubApiService, private router: Router) {}

    public validatePage(value: string): boolean {
        return this.INT_REGEX.test(value);
    }

    /**
     * Resolves the stop information via the stopId param inside the route
     *
     * @param route The RouteSnapshot
     * @param state The RouterState
     */
    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserRepositoriesResponse> {
        let page = 1;
        const providedPage: string | undefined = route.params?.page as string;
        if (providedPage) {
            if (!this.validatePage(providedPage)) {
                void this.router.navigate(['repos']);
                return EMPTY;
            }
            page = parseInt(providedPage, 10);
        }
        return this.api.getUserRepos(environment.github.username, 25, page).pipe(
            tap((value: any[]): void => {
                if (value.length === 0 && page !== 1) {
                    throw new HttpErrorResponse({ status: 404 });
                }
            }),
            catchError((err: any | HttpErrorResponse): Observable<UserRepositoriesResponse> => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 404 && isPlatformBrowser(this.platformId)) {
                        void this.router.navigate(['404']);
                        return EMPTY;
                    } else if (err.status === 403) {
                        console.log('Rate limit');
                        return EMPTY;
                    }
                }
                return EMPTY;
            })
        );
    }
}
