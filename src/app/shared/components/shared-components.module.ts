import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaexTableComponent } from './raex-table/raex-table.component';



@NgModule({
  declarations: [
    RaexTableComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RaexTableComponent
  ]
})
export class SharedComponentsModule { }
