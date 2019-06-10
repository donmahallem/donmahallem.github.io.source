import { Component, AfterViewInit, OnDestroy, NgZone, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { Repository } from 'src/app/modal';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'app-repo-stats-box',
    templateUrl: './repo-stats-box.component.html',
    styleUrls: ['./repo-stats-box.component.scss']
})
export class RepoStatsBoxComponent {
    @Input()
    public repository: Repository = undefined;
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
