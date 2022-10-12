import { Component, Input, OnInit } from '@angular/core';
import { CurrencyTax } from 'src/app/models/currency-tax/currency-tax';

@Component({
  selector: 'app-currency-tax',
  templateUrl: './currency-tax.component.html',
  styleUrls: ['./currency-tax.component.scss']
})
export class CurrencyTaxComponent implements OnInit {

  private _currencyTaxs: CurrencyTax[] = [];
  @Input() set currencyTaxs(value: CurrencyTax[]) {
    this._currencyTaxs = value;
    console.log(this.currencyTaxs);
  }
  get currencyTaxs(): CurrencyTax[] {
    return this._currencyTaxs;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
