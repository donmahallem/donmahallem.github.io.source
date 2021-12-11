/*
 * Package @donmahallem/github-page
 * Source https://donmahallem.github.io/donmahallem.github.io.source/
 */


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoDetailComponent } from './repo-detail.component';
import { RepoResolver } from './repo.resolver';

const repoRoutes: Routes = [
    {
        component: RepoDetailComponent,
        path: ':reponame',
        resolve: {
            repo: RepoResolver,
        },
    },
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
