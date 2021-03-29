/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { Component, Input } from '@angular/core';
import { IRepository } from 'src/app/modal';

@Component({
    selector: 'app-home',
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    @Input()
    public repository: IRepository;
}
