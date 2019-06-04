import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposResolver } from './repos.resolver';
import { RepoListComponent } from './repo-list.component';

const tripPassagesRoute: Routes = [
    {
        component: RepoListComponent,
        path: '',
        resolve: {
            repos: ReposResolver,
        },
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
