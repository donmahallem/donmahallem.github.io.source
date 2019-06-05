import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule,
} from '@angular/material';
import { ReposResolver } from './repos.resolver';
import { RepoResolver } from './repo.resolver';
import { RepoListComponent } from './repo-list.component';
import { ReposRoutingModule } from './repos-routing.module';
import { ReposListItemComponent } from './repos-list-item.component';
import { RepoDetailComponent } from './repo-detail.component';
@NgModule({
    declarations: [
        RepoListComponent,
        ReposListItemComponent,
        RepoDetailComponent
    ],
    imports: [
        CommonModule,
        ReposRoutingModule,
        MatGridListModule
    ],
    providers: [
        ReposResolver,
        RepoResolver
    ],
})
export class ReposModule { }
