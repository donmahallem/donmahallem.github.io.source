import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Repository } from 'src/app/modal';
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
    @Input()
    public currentPage = 1;
    @Output()
    public pageChange: EventEmitter<number> = new EventEmitter();
    @Input()
    public pageMax = -1;
    public constructor() {
        // not empty
    }

}
