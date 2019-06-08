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
@NgModule({
    declarations: [
        RepoDetailComponent,
    ],
    imports: [
        CommonModule,
        RepoRoutingModule,
        MatGridListModule,
        MatDividerModule,
        MatListModule,
        ObjectTreeModule
    ],
    providers: [
        RepoResolver
    ],
})
export class RepoModule { }
