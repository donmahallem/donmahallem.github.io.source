/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRepository } from 'src/app/modal';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-repo-detail',
    styleUrls: ['./repo-detail.component.scss'],
    templateUrl: './repo-detail.component.html',
})
export class RepoDetailComponent implements AfterViewInit, OnDestroy {
    public repository: IRepository = undefined;
    private updateSubscription: Subscription;
    public constructor(private activatedRoute: ActivatedRoute,
        private cdRef: ChangeDetectorRef) {

    }

    public ngAfterViewInit(): void {
        this.updateSubscription = this.activatedRoute
            .data
            .pipe(map((data: Data): IRepository => data.repo))
            .subscribe((repo: IRepository): void => {
                this.setRepository(repo);
            });
    }

    public setRepository(repo: IRepository): void {
        this.repository = repo;
        this.cdRef.detectChanges();
    }

    public ngOnDestroy(): void {
        if (this.updateSubscription) {
            this.updateSubscription.unsubscribe();
        }
    }

    public isJavascript(): boolean {
        if (this.repository && this.repository.language) {
            const lowerCaseLanguage: string = this.repository.language.toLowerCase();
            return (lowerCaseLanguage === 'typescript' || lowerCaseLanguage === 'javascript');
        }
        return false;
    }

    public get npmPackageUrl(): string {
        return `https://raw.githubusercontent.com/${this.repository.full_name}/master/package.json`;
    }

    public hasDescription(): boolean {
        if (this.repository) {
            return typeof this.repository.description === 'string';
        }
        return false;
    }
}
