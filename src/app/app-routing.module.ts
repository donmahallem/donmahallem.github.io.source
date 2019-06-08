import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
    loadChildren: () => import('./modules/routing/repos').then(m => m.ReposModule),
    path: 'repos',
  },
  {
    loadChildren: () => import('./modules/routing/repo').then(m => m.RepoModule),
    path: 'repo',
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    component: NotFoundComponent,
    path: '404'
  },
  {
    path: '**',
    redirectTo: '404'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
