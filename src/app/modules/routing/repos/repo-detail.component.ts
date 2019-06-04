import { Component, AfterViewInit, OnDestroy, NgZone, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Repository } from 'src/app/modal';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-repo-detail',
    templateUrl: './repo-detail.component.html',
    styleUrls: ['./repo-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepoDetailComponent implements AfterViewInit, OnDestroy {
    public repos: Repository[] = [];
    private updateSubscription: Subscription;
    public constructor(private activatedRoute: ActivatedRoute,
                       private cdRef: ChangeDetectorRef) {

    }

    public ngAfterViewInit(): void {
        this.updateSubscription = this.activatedRoute
            .data
            .pipe(map(data => data.repos))
            .subscribe((repos: Repository[]) => {
                this.setRepositories(repos);
            });
    }

    public setRepositories(repos: Repository[]): void {
        this.repos = repos;
        this.cdRef.detectChanges();
    }

    public ngOnDestroy(): void {
        this.updateSubscription.unsubscribe();
    }
}
