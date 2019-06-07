import { Component, AfterViewInit, OnDestroy, NgZone, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Repository } from 'src/app/modal';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
interface ListItem {
    repo: Repository;
    hasHeader: boolean;
    hasDivider: boolean;
    header: string;
}
@Component({
    selector: 'app-repo-list',
    templateUrl: './repo-list.component.html',
    styleUrls: ['./repo-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepoListComponent implements AfterViewInit, OnDestroy {
    public repos: ListItem[] = [];
    private updateSubscription: Subscription;
    public constructor(private activatedRoute: ActivatedRoute,
                       private cdRef: ChangeDetectorRef) {

    }

    public ngAfterViewInit(): void {
        this.updateSubscription = this.activatedRoute
            .data
            .pipe(map((data: { repos: Repository[] }): Repository[] => {
                return data.repos.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                });
            }),
                map((repos: Repository[]): ListItem[] => {
                    return repos.map((value: Repository, idx: number, arr: Repository[]): ListItem => {
                        const previousLetter: string = idx > 0 ? arr[idx - 1].name.charAt(0).toUpperCase() : '';
                        const currentLetter: string = arr[idx].name.charAt(0).toUpperCase();
                        const nextLetter: string = idx < arr.length - 1 ? arr[idx + 1].name.charAt(0).toUpperCase() : '';
                        return {
                            repo: value,
                            hasDivider: idx === arr.length - 1 ? false : currentLetter !== nextLetter,
                            hasHeader: idx === 0 ? true : currentLetter !== previousLetter,
                            header: currentLetter
                        };
                    });
                }))
            .subscribe((repos: ListItem[]) => {
                console.log(repos);
                this.setRepositories(repos);
            });
    }

    public setRepositories(repos: ListItem[]): void {
        this.repos = repos;
        this.cdRef.detectChanges();
    }

    public ngOnDestroy(): void {
        this.updateSubscription.unsubscribe();
    }
}
