import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GithubApiService } from 'src/app/services';
import { environment } from 'src/environments/environment.prod';
import { Repository } from 'src/app/modal';

/**
 * Resolves information for a stop provided in the route parameter 'stopId'
 * Redirects to /stops if the server responds with an 404 status
 */
@Injectable()
export class ReposResolver implements Resolve<Repository[]> {

    /**
     * Constructor
     * @param api the {@ApiService}
     * @param router the {@Router}
     */
    public constructor(private api: GithubApiService, private router: Router) { }

    public parseInt(value: any, defaultValue: number) {
        if (value) {
            try {
                return Math.max(1, parseInt(value, 10));
            } catch {
                return defaultValue;
            }
        }
        return defaultValue;
    }

    /**
     * Resolves the stop information via the stopId param inside the route
     * @param route The RouteSnapshot
     * @param state The RouterState
     */
    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Repository[]> {
        const page: number = this.parseInt(route.params.page, 1);
        return this.api
            .getUserRepos(environment.github.username, 25, page)
            .pipe(catchError((err: any | HttpErrorResponse) => {
                if (err.status === 404) {
                    this.router.navigate(['stops']);
                }
                return EMPTY;
            }));
    }
}
