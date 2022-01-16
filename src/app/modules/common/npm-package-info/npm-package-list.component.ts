/*
 * Package @donmahallem/github-page
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { Component, Input } from '@angular/core';
import { DependencyInfo } from './dependendy-info';
import { NpmPackageUtil } from './npm-package-util';
import { NpmPackageService } from './npm-package.service';
@Component({
    providers: [NpmPackageService],
    selector: 'app-npm-package-list',
    styleUrls: ['./npm-package-list.component.scss'],
    templateUrl: './npm-package-list.component.html',
})
export class NpmPackageListComponent extends NpmPackageUtil {
    @Input()
    public packages: DependencyInfo[] = [];
    @Input()
    public header: any = '';
    @Input()
    public description: any = '';

    public getPackageCount(): number {
        if (this.packages) {
            return this.packages.length;
        }
        return 0;
    }

    public isDisabled(): boolean {
        return this.getPackageCount() < 1;
    }
}
