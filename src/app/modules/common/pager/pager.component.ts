import { Component, AfterViewInit, OnDestroy, NgZone, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Repository } from 'src/app/modal';
import { ActivatedRoute } from '@angular/router';
import { Subscription, merge, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
interface ListItem {
    repo: Repository;
    hasHeader: boolean;
    hasDivider: boolean;
    header: string;
}
@Component({
    selector: 'app-pager',
    templateUrl: './pager.component.html',
    styleUrls: ['./pager.component.scss']
})
export class PagerComponent {
    public repos: Repository[] = [];
    public page = 1;
    public constructor(private activatedRoute: ActivatedRoute,
                       private cdRef: ChangeDetectorRef) {

    }

    public update(repos: Repository[], page): void {
        this.repos = repos;
        this.page = page;
        this.cdRef.detectChanges();
    }

}
