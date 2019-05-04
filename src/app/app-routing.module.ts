import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { NotFoundComponent } from './components';

const routes: Routes = [
  { path: 'admin', loadChildren: 'src/app/modules/admin/admin.module#AdminModule' },
  { path: 'article', loadChildren: 'src/app/modules/article/article.module#ArticleModule' },
  { path: '', pathMatch: 'full', redirectTo: '/article/list'},
  { path: '**', component: NotFoundComponent }
];

const config: ExtraOptions = {
  useHash: true,
}

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
