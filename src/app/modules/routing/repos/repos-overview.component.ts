/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserRepositoriesResponse } from 'src/app/modal';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-repos-overview',
    styleUrls: ['./repos-overview.component.scss'],
    templateUrl: './repos-overview.component.html',
})
export class ReposOverviewComponent implements AfterViewInit, OnDestroy {
    public repos: UserRepositoriesResponse = [];
    public page: number = 1;
    private updateSubscription: Subscription;

    public constructor(private activatedRoute: ActivatedRoute,
        private cdRef: ChangeDetectorRef) {

    }

    public ngAfterViewInit(): void {
        this.updateSubscription = this.activatedRoute
            .data
            .pipe(map((data: { repos: UserRepositoriesResponse }): UserRepositoriesResponse => {
                return data.repos;
            })).subscribe((repos: UserRepositoriesResponse): void => {
                this.update(repos);
            });
    }
    public getCurrentPage(): number {
        const params: any = this.activatedRoute.snapshot.params;
        if (params.page) {
            return parseInt(params.page, 10);
        } else {
            return 1;
        }
    }

    public hasNextPage(): boolean {
        return this.repos.length === 25;
    }

    public hasPreviousPage(): boolean {
        return this.getCurrentPage() > 1;
    }
    public update(repos: UserRepositoriesResponse): void {
        this.repos = repos;
        this.page = this.getCurrentPage();
        this.cdRef.detectChanges();
    }

    public ngOnDestroy(): void {
        this.updateSubscription.unsubscribe();
    }
}
