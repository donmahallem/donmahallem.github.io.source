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
import { ReposResolver } from './repos.resolver';
import { RepoListComponent } from './repo-list.component';
import { ReposRoutingModule } from './repos-routing.module';
import { ReposListItemComponent } from './repos-list-item.component';
import { ObjectTreeModule } from '../../common';
import { RepoResolver } from './repo.resolver';
import { ReposOverviewComponent } from './repos-overview.component';
@NgModule({
    declarations: [
        RepoListComponent,
        ReposListItemComponent,
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
