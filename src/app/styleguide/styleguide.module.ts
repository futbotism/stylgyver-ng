import { MetaInfoComponent } from './meta-info/meta-info.component';
import { ComponentsComponent } from './components/components.component';
import { ModelsComponent } from './models/models.component';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StyleguideRoutingModule } from './styleguide-routing.module';
import { StyleguideComponent } from './styleguide/styleguide.component';
import { StyleguideService } from './styleguide.service';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    StyleguideRoutingModule,
    SharedModule
  ],
  declarations: [
    StyleguideComponent,
    ModelsComponent,
    ComponentsComponent,
    MetaInfoComponent,
    PipesComponent,
    DirectivesComponent,
    LandingComponent
  ],
  providers: [
    StyleguideService
  ]
})
export class StyleguideModule { }
