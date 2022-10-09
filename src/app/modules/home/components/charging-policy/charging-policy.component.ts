import { Component, Input, OnInit } from '@angular/core';
import { ChargingPolicy } from 'src/app/models/charging-policy/charging-policy';

@Component({
  selector: 'app-charging-policy',
  templateUrl: './charging-policy.component.html',
  styleUrls: ['./charging-policy.component.scss']
})
export class ChargingPolicyComponent implements OnInit {

  private _charginhPolicies: ChargingPolicy[] = [];
  @Input() set charginhPolicies(value: ChargingPolicy[]) {
    this._charginhPolicies = value;
    console.log(this.charginhPolicies);
  }
  get charginhPolicies(): ChargingPolicy[] {
    return this._charginhPolicies;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
