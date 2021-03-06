/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { Component, Input } from '@angular/core';
import { IRepository } from 'src/app/modal';

@Component({
    selector: 'app-not-found',
    styleUrls: ['./not-found.component.scss'],
    templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
    @Input()
    public repository: IRepository;
}
