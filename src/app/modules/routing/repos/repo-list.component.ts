/*
 * Package @donmahallem/github-page
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */


import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { UserRepositoriesResponse, UserRepositoryResponse } from 'src/app/modal';
interface IListItem {
    repo: UserRepositoryResponse;
    hasHeader: boolean;
    hasDivider: boolean;
    header: string;
}
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-repo-list',
    styleUrls: ['./repo-list.component.scss'],
    templateUrl: './repo-list.component.html',
})
export class RepoListComponent {
    public items: IListItem[] = [];
    public constructor(private cdRef: ChangeDetectorRef) {

    }
    @Input()
    public set repositories(repos: UserRepositoriesResponse) {
        this.items = repos.sort((a: UserRepositoriesResponse[0], b: UserRepositoriesResponse[0]): number => {
            return a.name.localeCompare(b.name);
        }).map((value: UserRepositoryResponse, idx: number, arr: UserRepositoriesResponse): IListItem => {
            const previousLetter: string = idx > 0 ? arr[idx - 1].name.charAt(0).toUpperCase() : '';
            const currentLetter: string = arr[idx].name.charAt(0).toUpperCase();
            const nextLetter: string = idx < arr.length - 1 ? arr[idx + 1].name.charAt(0).toUpperCase() : '';
            return {
                hasDivider: idx === arr.length - 1 ? false : currentLetter !== nextLetter,
                hasHeader: idx === 0 ? true : currentLetter !== previousLetter,
                header: currentLetter,
                repo: value,
            };
        });
        this.cdRef.detectChanges();
    }
}
