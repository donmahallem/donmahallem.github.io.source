/*
 * Package @donmahallem/github-page
 * Source https://donmahallem.github.io/donmahallem.github.io.source/
 */


import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ObjectTreeModule } from '../../common';
import { NpmPackageInfoModule } from '../../common/npm-package-info';
import { RepoDetailComponent } from './repo-detail.component';
import { RepoRoutingModule } from './repo-routing.module';
import { RepoStatsBoxItemComponent } from './repo-stats-box-item.component';
import { RepoStatsBoxComponent } from './repo-stats-box.component';
import { RepoResolver } from './repo.resolver';
@NgModule({
    declarations: [
        RepoDetailComponent,
        RepoStatsBoxComponent,
        RepoStatsBoxItemComponent,
    ],
    imports: [
        CommonModule,
        RepoRoutingModule,
        MatGridListModule,
        MatDividerModule,
        MatListModule,
        ObjectTreeModule,
        NpmPackageInfoModule,
        MatIconModule,
    ],
    providers: [
        RepoResolver,
    ],
})
export class RepoModule { }
