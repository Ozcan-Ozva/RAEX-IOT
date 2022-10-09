import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaexTableComponent } from './raex-table/raex-table.component';
import { PdfPageComponent } from './pdf-page/pdf-page.component';



@NgModule({
  declarations: [
    RaexTableComponent,
    PdfPageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RaexTableComponent,
    PdfPageComponent
  ]
})
export class SharedComponentsModule { }
