import { Component, Input } from '@angular/core';
import { Repository } from 'src/app/modal';

@Component({
    selector: 'app-repos-list-item',
    templateUrl: './repos-list-item.component.html',
    styleUrls: ['./repos-list-item.component.scss']
})
export class ReposListItemComponent {
    @Input()
    public repository: Repository;
}
