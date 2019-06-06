import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    loadChildren: () => import('./modules/routing/repos/repos.module').then(m => m.ReposModule),
    path: 'repos',
  },
  {
    path: '',
    component: HomeComponent
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
