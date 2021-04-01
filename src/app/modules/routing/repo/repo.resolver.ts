/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GithubApiService } from 'src/app/services';
import { environment } from 'src/environments/environment.prod';

/**
 * Resolves information for a stop provided in the route parameter 'stopId'
 * Redirects to /stops if the server responds with an 404 status
 */
@Injectable()
export class RepoResolver implements Resolve<any> {

    /**
     * Constructor
     * @param api the {@ApiService}
     * @param router the {@Router}
     */
    public constructor(private api: GithubApiService, private router: Router) { }

    /**
     * Resolves the stop information via the stopId param inside the route
     * @param route The RouteSnapshot
     * @param state The RouterState
     */
    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.api
            .getRepo(environment.github.username, route.params.reponame)
            .pipe(catchError((err: any | HttpErrorResponse): Observable<void> => {
                if (err.status === 404) {
                    this.router.navigate(['stops']);
                }
                return EMPTY;
            }));
    }
}
