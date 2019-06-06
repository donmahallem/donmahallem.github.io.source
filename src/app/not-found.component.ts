import { Component, Input } from '@angular/core';
import { Repository } from 'src/app/modal';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
    @Input()
    public repository: Repository;
}
