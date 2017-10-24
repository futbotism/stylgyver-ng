import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs/docs.component';

@NgModule({
  imports: [
    CommonModule,
    DocsRoutingModule,
    SharedModule
  ],
  declarations: [DocsComponent]
})
export class DocsModule { }
