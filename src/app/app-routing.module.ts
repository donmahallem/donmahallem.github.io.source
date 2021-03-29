/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
    loadChildren: (): any => import('./modules/routing/repos').then((m: any): any => m.ReposModule),
    path: 'repos',
  },
  {
    loadChildren: (): any => import('./modules/routing/repo').then((m: any): any => m.RepoModule),
    path: 'repo',
  },
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: NotFoundComponent,
    path: '404',
  },
  {
    path: '**',
    redirectTo: '404',
  }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
  })],
})
export class AppRoutingModule { }
