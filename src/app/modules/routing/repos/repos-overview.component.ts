import { Component, AfterViewInit, OnDestroy, NgZone, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Repository } from 'src/app/modal';
import { ActivatedRoute } from '@angular/router';
import { Subscription, merge, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
interface ListItem {
    repo: Repository;
    hasHeader: boolean;
    hasDivider: boolean;
    header: string;
}
@Component({
    selector: 'app-repos-overview',
    templateUrl: './repos-overview.component.html',
    styleUrls: ['./repos-overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReposOverviewComponent implements AfterViewInit, OnDestroy {
    public repos: Repository[] = [];
    public page = 1;
    private updateSubscription: Subscription;

    public constructor(private activatedRoute: ActivatedRoute,
                       private cdRef: ChangeDetectorRef) {

    }

    public ngAfterViewInit(): void {
        this.updateSubscription = this.activatedRoute
            .data
            .pipe(map((data: { repos: Repository[] }): Repository[] => {
                return data.repos;
            })).subscribe((repos) => {
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
    public update(repos: Repository[]): void {
        this.repos = repos;
        this.page = this.getCurrentPage();
        this.cdRef.detectChanges();
    }

    public ngOnDestroy(): void {
        this.updateSubscription.unsubscribe();
    }
}
