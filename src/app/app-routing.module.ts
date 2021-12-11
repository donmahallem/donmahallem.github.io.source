/*
 * Package @donmahallem/github-page
 * Source https://donmahallem.github.io/donmahallem.github.io.source/
 */


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RepoModule } from './modules/routing/repo';
import { ReposModule } from './modules/routing/repos';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
    loadChildren: (): Promise<ReposModule> => import('./modules/routing/repos')
      .then((m: { ReposModule: ReposModule }): ReposModule => m.ReposModule),
    path: 'repos',
  },
  {
    loadChildren: (): Promise<RepoModule> => import('./modules/routing/repo')
      .then((m: { RepoModule: RepoModule }): RepoModule => m.RepoModule),
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
