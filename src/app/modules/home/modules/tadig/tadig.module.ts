import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TadigRoutingModule } from './tadig-routing.module';
import { TadigListModule } from './containers/tadig-list/tadig-list.module';
import { TadigPDFUIModule } from './containers/tadig-pdf-ui/tadig-pdf-ui.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TadigRoutingModule,
    TadigListModule,
    TadigPDFUIModule,
  ]
})
export class TadigModule { }
