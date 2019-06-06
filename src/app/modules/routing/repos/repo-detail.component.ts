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
    public repository: Repository = undefined;
    private updateSubscription: Subscription;
    public constructor(private activatedRoute: ActivatedRoute,
                       private cdRef: ChangeDetectorRef) {

    }

    public ngAfterViewInit(): void {
        this.updateSubscription = this.activatedRoute
            .data
            .pipe(map(data => data.repo))
            .subscribe((repo: Repository) => {
                this.setRepository(repo);
            });
    }

    public setRepository(repo: Repository): void {
        this.repository = repo;
        this.cdRef.detectChanges();
    }

    public ngOnDestroy(): void {
        this.updateSubscription.unsubscribe();
    }
}
