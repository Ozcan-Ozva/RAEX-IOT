import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TadigPdfUiComponent } from './tadig-pdf-ui.component';
import { ApnBandsComponent } from './components/apn-bands/apn-bands.component';
import { ChargingPolicyComponent } from './components/charging-policy/charging-policy.component';
import { CoverComponent } from './components/cover/cover.component';
import { CurrencyTaxComponent } from './components/currency-tax/currency-tax.component';
import { DestinationBandsComponent } from './components/destination-bands/destination-bands.component';
import { DocumentHeaderComponent } from './components/document-header/document-header.component';
import { MOCComponent } from './components/moc/moc.component';
import { MosmsComponent } from './components/mosms/mosms.component';
import { MtcComponent } from './components/mtc/mtc.component';
import { MtsmsComponent } from './components/mtsms/mtsms.component';
import { PsDataComponent } from './components/ps-data/ps-data.component';
import { SpecialDaysComponent } from './components/special-days/special-days.component';
import { TableOfContentComponent } from './components/table-of-content/table-of-content.component';
import { TimeBandsComponent } from './components/time-bands/time-bands.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { EditFieldDialogComponent } from './components/edit-field-dialog/edit-field-dialog.component';
import { DialogModule } from 'src/app/shared/dialog/dialog.module';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    TadigPdfUiComponent,
    CoverComponent,
    TableOfContentComponent,
    DocumentHeaderComponent,
    SpecialDaysComponent,
    DestinationBandsComponent,
    CurrencyTaxComponent,
    TimeBandsComponent,
    ApnBandsComponent,
    ChargingPolicyComponent,
    MOCComponent,
    MtcComponent,
    MosmsComponent,
    MtsmsComponent,
    PsDataComponent,
    EditFieldDialogComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    DialogModule,
    OverlayModule,
  ]
})
export class TadigPDFUIModule { }
