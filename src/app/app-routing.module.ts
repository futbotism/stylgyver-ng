import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
  //   children: [
      {
        path: '',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'docs',
        loadChildren: './docs/docs.module#DocsModule'
      },
      {
        path: 'styleguide',
        loadChildren: './styleguide/styleguide.module#StyleguideModule'
      }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
