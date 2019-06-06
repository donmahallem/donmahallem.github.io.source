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
import { RepoDetailComponent } from './repo-detail.component';
import { RepoResolver } from './repo.resolver';
@NgModule({
    declarations: [
        RepoListComponent,
        ReposListItemComponent,
        RepoDetailComponent
    ],
    imports: [
        CommonModule,
        ReposRoutingModule,
        MatGridListModule,
        MatDividerModule,
        ObjectTreeModule
    ],
    providers: [
        ReposResolver,
        RepoResolver
    ],
})
export class ReposModule { }
