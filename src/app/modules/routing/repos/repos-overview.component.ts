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
        this.updateSubscription = combineLatest(this.activatedRoute
            .data
            .pipe(map((data: { repos: Repository[] }): Repository[] => {
                return data.repos;
            })), this.activatedRoute.params.pipe(map(params => params.page)))
            .subscribe(([repos, page]) => {
                this.update(repos, page);
            });
    }

    public update(repos: Repository[], page): void {
        this.repos = repos;
        this.page = page;
        this.cdRef.detectChanges();
    }

    public ngOnDestroy(): void {
        this.updateSubscription.unsubscribe();
    }
}
