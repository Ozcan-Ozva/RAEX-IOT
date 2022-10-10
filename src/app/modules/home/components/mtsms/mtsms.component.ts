import { Component, Input, OnInit } from '@angular/core';
import { MtSms } from 'src/app/models/mt-sms/mt-sms';

@Component({
  selector: 'app-mtsms',
  templateUrl: './mtsms.component.html',
  styleUrls: ['./mtsms.component.scss']
})
export class MtsmsComponent implements OnInit {

  private _mtSms: MtSms[] = [];
  @Input() set mtSms(value: MtSms[]) {
    this._mtSms = value;
    console.log(this.mtSms);
  }
  get mtSms(): MtSms[] {
    return this._mtSms;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
