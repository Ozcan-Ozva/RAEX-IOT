import { MoSms } from '../../../../../../../../models/mo-sms/mo-sms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mosms',
  templateUrl: './mosms.component.html',
  styleUrls: ['./mosms.component.scss']
})
export class MosmsComponent implements OnInit {

  private _moSms: MoSms[] = [];
  @Input() set moSms(value: MoSms[]) {
    this._moSms = value;
    console.log(this.moSms);
  }
  get moSms(): MoSms[] {
    return this._moSms;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
