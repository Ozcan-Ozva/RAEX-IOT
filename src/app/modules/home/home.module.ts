import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PdfPageComponent } from './components/pdf-page/pdf-page.component';
import { CoverComponent } from './components/cover/cover.component';
import { TableOfContentComponent } from './components/table-of-content/table-of-content.component';
import { DocumentHeaderComponent } from './components/document-header/document-header.component';
import { ReadingJsonService } from 'src/app/services/read-json.service';
import { SpecialDaysComponent } from './components/special-days/special-days.component';
import { DestinationBandsComponent } from './components/destination-bands/destination-bands.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';


@NgModule({
  declarations: [
    HomeComponent,
    PdfPageComponent,
    CoverComponent,
    TableOfContentComponent,
    DocumentHeaderComponent,
    SpecialDaysComponent,
    DestinationBandsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedComponentsModule,
  ],
})
export class HomeModule { }
