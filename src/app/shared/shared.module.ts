import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagyverListComponent } from './components/magyver-list/magyver-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MagyverListComponent],
  exports: [MagyverListComponent]
})
export class SharedModule { }
