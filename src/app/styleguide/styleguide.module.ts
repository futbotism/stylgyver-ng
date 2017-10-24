import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StyleguideRoutingModule } from './styleguide-routing.module';
import { StyleguideComponent } from './styleguide/styleguide.component';

@NgModule({
  imports: [
    CommonModule,
    StyleguideRoutingModule,
    SharedModule
  ],
  declarations: [StyleguideComponent]
})
export class StyleguideModule { }
