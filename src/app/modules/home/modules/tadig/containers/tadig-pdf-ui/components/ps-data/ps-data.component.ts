import { PsData } from '../../../../../../../../models/ps-data/ps-data';
import { Component, Input, OnInit } from '@angular/core';
import { PsDataRatingInterval } from 'src/app/models/ps-data-rating-interval/ps-data-rating-interval';

@Component({
  selector: 'app-ps-data',
  templateUrl: './ps-data.component.html',
  styleUrls: ['./ps-data.component.scss']
})
export class PsDataComponent implements OnInit {

  /* this for PsDataRatingInterval */
  private _psDataRatingInterval: PsDataRatingInterval[] = [];
  @Input() set psDataRatingInterval(value: PsDataRatingInterval[]) {
    this._psDataRatingInterval = value;
    console.log(this.psDataRatingInterval);
  }
  get psDataRatingInterval(): PsDataRatingInterval[] {
    return this._psDataRatingInterval;
  }

  /* this for PsData */
  private _psData: PsData[] = [];
  @Input() set psData(value: PsData[]) {
    this._psData = value;
    console.log(this.psData);
  }
  get psData(): PsData[] {
    return this._psData;
  }

  constructor() { }

  ngOnInit(): void {
  }

}