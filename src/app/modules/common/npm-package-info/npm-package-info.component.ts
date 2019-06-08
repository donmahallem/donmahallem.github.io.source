import { Component, AfterViewInit, OnDestroy, NgZone, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { Repository, GithubFileId, NpmPackage } from 'src/app/modal';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';
import { FlatTreeControl } from '@angular/cdk/tree';
import { NpmPackageService } from './npm-package.service';
import { DependencyInfo } from './dependendy-info';
@Component({
    selector: 'app-npm-package-info',
    templateUrl: './npm-package-info.component.html',
    styleUrls: ['./npm-package-info.component.scss'],
    providers: [NpmPackageService]
})
export class NpmPackageInfoComponent implements AfterViewInit, OnDestroy {

    private loadSubscription: Subscription;
    public dependencies: DependencyInfo[] = [];
    public devDependencies: DependencyInfo[] = [];
    constructor(private packageService: NpmPackageService,
                private changeDetectorRef: ChangeDetectorRef) {

    }
    @Input()
    public set packageUrl(url: string) {
        this.packageService.package = url;
    }

    public convertMapToArray(obj: { [key: string]: string }): DependencyInfo[] {
        return Object.keys(obj).map((key: string) => [key, obj[key]]);
    }

    public ngAfterViewInit(): void {
        this.loadSubscription = this.packageService
            .observePackage()
            .subscribe((pack: NpmPackage): void => {
                this.dependencies = this.convertMapToArray(pack.dependencies);
                this.devDependencies = this.convertMapToArray(pack.devDependencies);
                this.changeDetectorRef.detectChanges();
            });
    }

    public derangeVersion(version: string): string {
        return version.match(/[0-9].*/)[0];
    }

    public ngOnDestroy(): void {
        if (this.loadSubscription) {
            this.loadSubscription.unsubscribe();
        }
    }
}
