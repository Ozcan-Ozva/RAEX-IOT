import { NgModule } from '@angular/core';
import { DestinationBandsGateway } from './destination-bands.service';
import { SpecialDaysGateway } from './special-days.service';

@NgModule({
    providers: [
        SpecialDaysGateway,
        DestinationBandsGateway,
    ],
})
export class GatewayModule {}
