import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule,
    MatDividerModule,
} from '@angular/material';
import { ObjectTreeModule } from '../../common';
import { RepoDetailComponent } from './repo-detail.component';
import { RepoResolver } from './repo.resolver';
import { RepoRoutingModule } from './repo-routing.module';
import { NpmPackageInfoModule } from '../../common/npm-package-info';
import { RepoStatsBoxComponent } from './repo-stats-box.component';
import { RepoStatsBoxItemComponent } from './repo-stats-box-item.component';
@NgModule({
    declarations: [
        RepoDetailComponent,
        RepoStatsBoxComponent,
        RepoStatsBoxItemComponent
    ],
    imports: [
        CommonModule,
        RepoRoutingModule,
        MatGridListModule,
        MatDividerModule,
        MatListModule,
        ObjectTreeModule,
        NpmPackageInfoModule,
        MatIconModule
    ],
    providers: [
        RepoResolver
    ],
})
export class RepoModule { }
