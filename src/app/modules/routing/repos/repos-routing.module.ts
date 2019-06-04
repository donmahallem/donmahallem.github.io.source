import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposResolver } from './repos.resolver';
import { RepoListComponent } from './repo-list.component';
import { RepoDetailComponent } from './repo-detail.component';
import { RepoResolver } from './repo.resolver';

const tripPassagesRoute: Routes = [
    {
        component: RepoListComponent,
        path: '',
        resolve: {
            repos: ReposResolver,
        },
        children: [
            {
                path: ':id',
                component: RepoDetailComponent,
                resolve: {
                    repo: RepoResolver,
                },
            }
        ]
    },
];

@NgModule({
    exports: [
        RouterModule,
    ],
    imports: [
        RouterModule.forChild(tripPassagesRoute),
    ],
})
export class ReposRoutingModule { }
