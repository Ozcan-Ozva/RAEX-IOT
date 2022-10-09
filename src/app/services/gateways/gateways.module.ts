import { NgModule } from '@angular/core';
import { DestinationBandsGateway } from './destination-bands.service';
import { SpecialDaysGateway } from './special-days.service';
import { TadigGateway } from './tadig.service';

@NgModule({
    providers: [
        SpecialDaysGateway,
        DestinationBandsGateway,
        TadigGateway,
    ],
})
export class GatewayModule {}
