import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatToolbarModule,
} from '@angular/material';
import { ReposResolver } from './repos.resolver';
import { RepoResolver } from './repo.resolver';
import { RepoListComponent } from './repo-list.component';
import { ReposRoutingModule } from './repos-routing.module';
@NgModule({
    declarations: [
        RepoListComponent
    ],
    imports: [
        CommonModule,
        ReposRoutingModule
    ],
    providers: [
        ReposResolver,
        RepoResolver
    ],
})
export class ReposModule { }
