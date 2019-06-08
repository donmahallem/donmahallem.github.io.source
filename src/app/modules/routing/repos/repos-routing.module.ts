import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposResolver } from './repos.resolver';
import { RepoResolver } from './repo.resolver';
import { ReposOverviewComponent } from './repos-overview.component';

const tripPassagesRoute: Routes = [
    {
        path: '',
        component: ReposOverviewComponent,
        resolve: {
            repos: ReposResolver,
        },
        pathMatch: 'full'
    },
    {
        path: ':page',
        component: ReposOverviewComponent,
        resolve: {
            repos: ReposResolver,
        },
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
