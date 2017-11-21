import { DirectivesComponent } from './directives/directives.component';
import { ModelsComponent } from './models/models.component';
import { StyleguideComponent } from './styleguide/styleguide.component';
import { ComponentsComponent } from './components/components.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [{
  path: '',
  component: StyleguideComponent,
  children: [{
    path: 'components',
    component: ComponentsComponent
  }, {
    path: 'models',
    component: ModelsComponent
  }, {
    path: 'pipes',
    component: PipesComponent
  }, {
    path: 'directives',
    component: DirectivesComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StyleguideRoutingModule { }
