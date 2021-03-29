/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposOverviewComponent } from './repos-overview.component';
import { ReposResolver } from './repos.resolver';

const tripPassagesRoute: Routes = [
    {
        component: ReposOverviewComponent,
        path: '',
        pathMatch: 'full',
        resolve: {
            repos: ReposResolver,
        },
    },
    {
        component: ReposOverviewComponent,
        path: ':page',
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
