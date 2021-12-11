/*
 * Package @donmahallem/github-page
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */


import { AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { INpmPackage } from 'src/app/modal';
import { DependencyInfo } from './dependendy-info';
import { NpmPackageUtil } from './npm-package-util';
import { NpmPackageService } from './npm-package.service';
@Component({
    providers: [NpmPackageService],
    selector: 'app-npm-package-info',
    styleUrls: ['./npm-package-info.component.scss'],
    templateUrl: './npm-package-info.component.html',
})
export class NpmPackageInfoComponent extends NpmPackageUtil implements AfterViewInit, OnDestroy {
    private loadSubscription: Subscription;
    public dependencies: DependencyInfo[] = [];
    public devDependencies: DependencyInfo[] = [];
    public optionalDependencies: DependencyInfo[] = [];
    constructor(private packageService: NpmPackageService,
        private changeDetectorRef: ChangeDetectorRef) {
        super();
    }
    @Input()
    public set packageUrl(url: string) {
        this.packageService.package = url;
    }

    public convertMapToArray(obj: { [key: string]: string }): DependencyInfo[] {
        if (obj) {
            return Object.keys(obj).map((key: string): DependencyInfo => [key, obj[key]]);
        }
        return [];
    }

    public ngAfterViewInit(): void {
        this.loadSubscription = this.packageService
            .observePackage()
            .pipe(catchError((err: any): Observable<void> => {
                return EMPTY;
            }))
            .subscribe((pack: INpmPackage): void => {
                this.dependencies = this.convertMapToArray(pack.dependencies);
                this.devDependencies = this.convertMapToArray(pack.devDependencies);
                this.optionalDependencies = this.convertMapToArray(pack.optionalDependencies);
                this.changeDetectorRef.detectChanges();
            });
    }

    public ngOnDestroy(): void {
        if (this.loadSubscription) {
            this.loadSubscription.unsubscribe();
        }
    }
}
