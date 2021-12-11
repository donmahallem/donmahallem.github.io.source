/*
 * Package @donmahallem/github-page
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { ObjectTreeModule } from '../../common';
import { RepoListComponent } from './repo-list.component';
import { ReposOverviewComponent } from './repos-overview.component';
import { ReposRoutingModule } from './repos-routing.module';
import { ReposResolver } from './repos.resolver';
@NgModule({
    declarations: [RepoListComponent, ReposOverviewComponent],
    imports: [CommonModule, ReposRoutingModule, MatGridListModule, MatDividerModule, MatListModule, ObjectTreeModule],
    providers: [ReposResolver],
})
export class ReposModule {}
