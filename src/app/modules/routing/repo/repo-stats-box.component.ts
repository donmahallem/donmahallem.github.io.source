/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { Component, Input } from '@angular/core';
import { IRepository } from 'src/app/modal';

@Component({
    selector: 'app-repo-stats-box',
    styleUrls: ['./repo-stats-box.component.scss'],
    templateUrl: './repo-stats-box.component.html',
})
export class RepoStatsBoxComponent {
    @Input()
    public repository: IRepository = undefined;
    public get starCount(): number {
        if (this.repository && this.repository.stargazers_count) {
            return this.repository.stargazers_count;
        }
        return 0;
    }
    public get forkCount(): number {
        if (this.repository && this.repository.forks_count) {
            return this.repository.forks_count;
        }
        return 0;
    }
    public get issueCount(): number {
        if (this.repository && this.repository.open_issues_count) {
            return this.repository.open_issues_count;
        }
        return 0;
    }
    public get subscriberCount(): number {
        if (this.repository && this.repository.subscribers_count) {
            return this.repository.subscribers_count;
        }
        return 0;
    }

    public get language(): string {
        if (this.repository && this.repository.language) {
            return this.repository.language;
        }
        return 'unknown';
    }

}
