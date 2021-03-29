/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { Component, Input } from '@angular/core';
import { DependencyInfo } from './dependendy-info';
import { NpmPackageService } from './npm-package.service';
@Component({
    providers: [NpmPackageService],
    selector: 'app-npm-package-list',
    styleUrls: ['./npm-package-list.component.scss'],
    templateUrl: './npm-package-list.component.html',
})
export class NpmPackageListComponent {

    @Input()
    public packages: DependencyInfo[] = [];
    @Input()
    public header: any = '';
    @Input()
    public description: any = '';

    public derangeVersion(version: string): string {
        return version.match(/[0-9].*/)[0];
    }

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
