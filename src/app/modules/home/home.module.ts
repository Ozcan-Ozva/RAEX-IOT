import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PdfPageComponent } from '../../shared/components/pdf-page/pdf-page.component';
import { CoverComponent } from './components/cover/cover.component';
import { TableOfContentComponent } from './components/table-of-content/table-of-content.component';
import { DocumentHeaderComponent } from './components/document-header/document-header.component';
import { ReadingJsonService } from 'src/app/services/read-json.service';
import { SpecialDaysComponent } from './components/special-days/special-days.component';
import { DestinationBandsComponent } from './components/destination-bands/destination-bands.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { CurrencyTaxComponent } from './components/currency-tax/currency-tax.component';
import { TimeBandsComponent } from './components/time-bands/time-bands.component';
import { ApnBandsComponent } from './components/apn-bands/apn-bands.component';
import { ChargingPolicyComponent } from './components/charging-policy/charging-policy.component';
import { MOCComponent } from './components/moc/moc.component';


@NgModule({
  declarations: [
    HomeComponent,
    CoverComponent,
    TableOfContentComponent,
    DocumentHeaderComponent,
    SpecialDaysComponent,
    DestinationBandsComponent,
    CurrencyTaxComponent,
    TimeBandsComponent,
    ApnBandsComponent,
    ChargingPolicyComponent,
    MOCComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedComponentsModule,
  ],
})
export class HomeModule { }
