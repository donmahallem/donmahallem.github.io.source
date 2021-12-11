/*
 * Package @donmahallem/github-page
 * Source https://donmahallem.github.io/donmahallem.github.io.source/
 */

import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-repo-stats-box-item',
    styleUrls: ['./repo-stats-box-item.component.scss'],
    templateUrl: './repo-stats-box-item.component.html',
})
export class RepoStatsBoxItemComponent {
    @Input()
    public icon: string;
}
