import { Component, AfterViewInit, OnDestroy, NgZone, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { Repository } from 'src/app/modal';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'app-repo-stats-box-item',
    templateUrl: './repo-stats-box-item.component.html',
    styleUrls: ['./repo-stats-box-item.component.scss']
})
export class RepoStatsBoxItemComponent {
    @Input()
    public icon: string;

    @Input()
    public title: string;
}
