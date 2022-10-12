import { Component, Input, OnInit } from '@angular/core';
import { MtcCallTypes } from 'src/app/models/mtc-call-types/mtc-call-types';
import { MtcChargedReciprocatingRatingInterval } from 'src/app/models/mtc-charged-always-rating-interval/mtc-charged-always-rating-interval';
import { MtcDestinationBandCharging } from 'src/app/models/mtc-destination-band-charging/mtc-destination-band-charging';

@Component({
  selector: 'app-mtc',
  templateUrl: './mtc.component.html',
  styleUrls: ['./mtc.component.scss']
})
export class MtcComponent implements OnInit {

  displayedDisplayedMtcCallTypes: DisplayedMtcCallTypes | undefined;
  
  /* this for MocRatingInterval */
  private _mtcRatingIntervals: MtcChargedReciprocatingRatingInterval[] = [];
  @Input() set mtcRatingIntervals(value: MtcChargedReciprocatingRatingInterval[]) {
    this._mtcRatingIntervals = value;
    console.log(this.mtcRatingIntervals);
  }
  get mtcRatingIntervals(): MtcChargedReciprocatingRatingInterval[] {
    return this._mtcRatingIntervals;
  }

  /* this for MocCallTypes */
  private _mtcCallTypes: MtcCallTypes[] = [];
  @Input() set mtcCallTypes(value: MtcCallTypes[]) {
    this._mtcCallTypes = value;
    console.log(this.mtcCallTypes);
    this.displayedDisplayedMtcCallTypes = {
      normalized_pricing_definition: this._mtcCallTypes[0].normalized_pricing_definition,
      location: this._mtcCallTypes[0].location,
      services: this.collectAllMocCallTypesServices(),
    }

  }
  get mtcCallTypes(): MtcCallTypes[] {
    return this._mtcCallTypes;
  }

  /* this for MocDestinationBandCharging */
  private _mtcDestinationBandCharging: MtcDestinationBandCharging[] = [];
  @Input() set mtcDestinationBandCharging(value: MtcDestinationBandCharging[]) {
    this._mtcDestinationBandCharging = value;
    console.log(this.mtcDestinationBandCharging);
  }
  get mtcDestinationBandCharging(): MtcDestinationBandCharging[] {
    return this._mtcDestinationBandCharging;
  }

  constructor() { }

  ngOnInit(): void {
  }

  collectAllMocCallTypesServices(): string {
    let result: string = '';
    this.mtcCallTypes.forEach((element) => {
      result+= element.services + ','
    });
    return result;
  }

}

interface DisplayedMtcCallTypes {
  normalized_pricing_definition: string | undefined;
  location: string | undefined;
  services: string | undefined;
}