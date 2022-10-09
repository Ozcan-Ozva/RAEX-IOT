import { Component, Input, OnInit } from '@angular/core';
import { MocCallTypes } from 'src/app/models/moc-call-types/moc-call-types';
import { MocDestinationBandCharging } from 'src/app/models/moc-destination-band-charging/moc-destination-band-charging';
import { MocRatingInterval } from 'src/app/models/moc-rating-interval/moc-rating-interval';

@Component({
  selector: 'app-moc',
  templateUrl: './moc.component.html',
  styleUrls: ['./moc.component.scss']
})
export class MOCComponent implements OnInit {

  displayedDisplayedMocCallTypes: DisplayedMocCallTypes | undefined;
  
  /* this for MocRatingInterval */
  private _mocRatingIntervals: MocRatingInterval[] = [];
  @Input() set mocRatingIntervals(value: MocRatingInterval[]) {
    this._mocRatingIntervals = value;
    console.log(this.mocRatingIntervals);
  }
  get mocRatingIntervals(): MocRatingInterval[] {
    return this._mocRatingIntervals;
  }

  /* this for MocCallTypes */
  private _mocCallTypes: MocCallTypes[] = [];
  @Input() set mocCallTypes(value: MocCallTypes[]) {
    this._mocCallTypes = value;
    console.log(this.mocCallTypes);
    this.displayedDisplayedMocCallTypes = {
      normalized_pricing_definition: this._mocCallTypes[0].normalized_pricing_definition,
      location: this._mocCallTypes[0].location,
      services: this.collectAllMocCallTypesServices(),
    }

  }
  get mocCallTypes(): MocCallTypes[] {
    return this._mocCallTypes;
  }

  /* this for MocDestinationBandCharging */
  private _mocDestinationBandCharging: MocDestinationBandCharging[] = [];
  @Input() set mocDestinationBandCharging(value: MocDestinationBandCharging[]) {
    this._mocDestinationBandCharging = value;
    console.log(this.mocDestinationBandCharging);
  }
  get mocDestinationBandCharging(): MocDestinationBandCharging[] {
    return this._mocDestinationBandCharging;
  }

  constructor() { }

  ngOnInit(): void {
  }

  collectAllMocCallTypesServices(): string {
    let result: string = '';
    this.mocCallTypes.forEach((element) => {
      result+= element.services + ','
    });
    return result;
  }
}

interface DisplayedMocCallTypes {
  normalized_pricing_definition: string | undefined;
  location: string | undefined;
  services: string | undefined;
}
