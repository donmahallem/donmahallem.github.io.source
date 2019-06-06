import { Component, Input } from '@angular/core';
import { Repository } from 'src/app/modal';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    @Input()
    public repository: Repository;
}
