import { Component, Input, OnInit } from '@angular/core';
import { SpecialDays } from 'src/app/models/special-days/special-days';
import { SpecialDaysGateway } from 'src/app/services/gateways/special-days.service';

@Component({
  selector: 'app-special-days',
  templateUrl: './special-days.component.html',
  styleUrls: ['./special-days.component.scss']
})
export class SpecialDaysComponent implements OnInit {

  private _specialDays: SpecialDays[] = [];
  @Input() set specialDays(value: SpecialDays[]) {
    this._specialDays = value;
    console.log(this.specialDays);
  }
  get specialDays(): SpecialDays[] {
    return this._specialDays;
  }

  /* specialDays: SpecialDays[] | undefined; */

  constructor(private specialDayService: SpecialDaysGateway) { }

  ngOnInit(): void {
    /* this.specialDayService.fetchAll().subscribe((data) => {
      this.specialDays = data;
    }) */
  }

}
