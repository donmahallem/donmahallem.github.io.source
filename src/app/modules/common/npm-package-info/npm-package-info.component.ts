import { Component, AfterViewInit, OnDestroy, NgZone, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { Repository } from 'src/app/modal';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';
import { FlatTreeControl } from '@angular/cdk/tree';
import { NpmPackageService } from './npm-package.service';

@Component({
    selector: 'app-npm-package-info',
    templateUrl: './npm-package-info.component.html',
    styleUrls: ['./npm-package-info.component.scss'],
    providers: [NpmPackageService]
})
export class NpmPackageInfoComponent {
    constructor(private packageService: NpmPackageService) {

    }
    @Input()
    public set packageUrl(url: string) {
        this.packageService.setPackageUrl(url);
    }
}
