import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposResolver } from './repos.resolver';
import { RepoListComponent } from './repo-list.component';
import { RepoDetailComponent } from './repo-detail.component';
import { RepoResolver } from './repo.resolver';
import { ReposOverviewComponent } from './repos-overview.component';

const tripPassagesRoute: Routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'list',
        children: [
            {
                path: '',
                component: ReposOverviewComponent,
                resolve: {
                    repos: ReposResolver,
                },
            },
            {
                path: ':page',
                component: ReposOverviewComponent,
                resolve: {
                    repos: ReposResolver,
                },
            }
        ]
    },
    {
        path: 'detail/:reponame',
        component: RepoDetailComponent,
        resolve: {
            repo: RepoResolver,
        },
    },
    {
        path: '**',
        redirectTo: '404'
    }

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
