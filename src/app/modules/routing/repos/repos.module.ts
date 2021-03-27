import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { ReposResolver } from './repos.resolver';
import { RepoListComponent } from './repo-list.component';
import { ReposRoutingModule } from './repos-routing.module';
import { ObjectTreeModule } from '../../common';
import { RepoResolver } from './repo.resolver';
import { ReposOverviewComponent } from './repos-overview.component';
@NgModule({
    declarations: [
        RepoListComponent,
        ReposOverviewComponent
    ],
    imports: [
        CommonModule,
        ReposRoutingModule,
        MatGridListModule,
        MatDividerModule,
        MatListModule,
        ObjectTreeModule
    ],
    providers: [
        ReposResolver,
        RepoResolver
    ],
})
export class ReposModule { }
