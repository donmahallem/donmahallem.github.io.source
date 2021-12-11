/*
 * Package @donmahallem/github-page
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */


import { Component, Input } from '@angular/core';
import { UserRepositoryResponse } from 'src/app/modal';

@Component({
    selector: 'app-repo-stats-box',
    styleUrls: ['./repo-stats-box.component.scss'],
    templateUrl: './repo-stats-box.component.html',
})
export class RepoStatsBoxComponent {
    @Input()
    public repository: UserRepositoryResponse = undefined;

    public get starCount(): number {
        return this?.repository?.stargazers_count || 0;
    }

    public get forkCount(): number {
        return this?.repository?.forks_count || 0;
    }
    public get issueCount(): number {
        return this?.repository?.open_issues_count || 0;
    }
    public get subscriberCount(): number {
        return this?.repository?.subscribers_count || 0;
    }

    public get language(): string {
        return this?.repository?.language || 'unknown';
    }

}
