import { Component, AfterViewInit, OnDestroy, NgZone, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Repository } from 'src/app/modal';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';
import { FlatTreeControl } from '@angular/cdk/tree';
@Component({
    selector: 'app-smart-icon',
    templateUrl: './smart-icon.component.html',
    styleUrls: ['./smart-icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartIconComponent {

}
