import { Component, Input, OnInit } from '@angular/core';
import { ApnBands } from 'src/app/models/apn-bands/apn-bands';

@Component({
  selector: 'app-apn-bands',
  templateUrl: './apn-bands.component.html',
  styleUrls: ['./apn-bands.component.scss']
})
export class ApnBandsComponent implements OnInit {

  private _apnBands: ApnBands[] = [];
  @Input() set apnBands(value: ApnBands[]) {
    this._apnBands = value;
    console.log(this.apnBands);
  }
  get apnBands(): ApnBands[] {
    return this._apnBands;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
