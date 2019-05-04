import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './components';

const routes: Routes = [
  { path: 'article', loadChildren: 'src/app/modules/article/article.module#ArticleModule' },
  { path: '', pathMatch: 'full', redirectTo: '/article/list'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
