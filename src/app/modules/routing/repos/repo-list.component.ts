import { Component, AfterViewInit, OnDestroy, NgZone, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';
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
export class RepoListComponent {
    public items: ListItem[] = [];
    public constructor(private cdRef: ChangeDetectorRef) {

    }
    @Input()
    public set repositories(repos: Repository[]) {
        this.items = repos.sort((a, b) => {
            return a.name.localeCompare(b.name);
        }).map((value: Repository, idx: number, arr: Repository[]): ListItem => {
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
        this.cdRef.detectChanges();
    }
}
