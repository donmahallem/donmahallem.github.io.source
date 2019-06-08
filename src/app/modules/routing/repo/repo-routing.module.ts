import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoDetailComponent } from './repo-detail.component';
import { RepoResolver } from './repo.resolver';

const repoRoutes: Routes = [
    {
        path: ':reponame',
        component: RepoDetailComponent,
        resolve: {
            repo: RepoResolver,
        },
    }
];

@NgModule({
    exports: [
        RouterModule,
    ],
    imports: [
        RouterModule.forChild(repoRoutes),
    ],
})
export class RepoRoutingModule { }
