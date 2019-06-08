import { Component, Input } from '@angular/core';
import { NpmPackageService } from './npm-package.service';
import { DependencyInfo } from './dependendy-info';
@Component({
    selector: 'app-npm-package-list',
    templateUrl: './npm-package-list.component.html',
    styleUrls: ['./npm-package-list.component.scss'],
    providers: [NpmPackageService]
})
export class NpmPackageListComponent {

    @Input()
    public packages: DependencyInfo[] = [];

    public derangeVersion(version: string): string {
        return version.match(/[0-9].*/)[0];
    }

}
