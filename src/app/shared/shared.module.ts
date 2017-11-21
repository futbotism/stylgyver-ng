import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardSmImage,
  MatCardTitle,
  MatToolbar,
  MatToolbarRow,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatExpansionModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MagyverListComponent } from './components/magyver-list/magyver-list.component';
import { MagyverfyString } from './pipes/magyverfy-string.pipe';
import { TitleCasePipe } from '../shared/pipes/title-case.pipe';
import { ColorifyDirective } from './directives/colorify.directive';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    FlexLayoutModule
  ],
  declarations: [
    MagyverListComponent,
    MatCard,
    MatCardContent,
    MatCardSmImage,
    MatCardTitle,
    MatToolbar,
    MatToolbarRow,
    MagyverfyString,
    TitleCasePipe,
    ColorifyDirective,
  ],
  exports: [
    MagyverListComponent,
    MatExpansionModule,
    MatButtonModule,
    MatCard,
    MatCardContent,
    MatCardSmImage,
    MatCardTitle,
    MatListModule,
    MatSidenavModule,
    MatToolbar,
    MatToolbarRow,
    MatIconModule,
    FlexLayoutModule,
    MagyverfyString,
    TitleCasePipe
  ]
})
export class SharedModule { }
