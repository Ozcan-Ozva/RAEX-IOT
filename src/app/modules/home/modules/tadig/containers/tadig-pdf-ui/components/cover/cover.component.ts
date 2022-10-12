import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  private _nameVPMN: string | undefined;
  @Input() set nameVPMN(value: string | undefined) {
    this._nameVPMN = value;
    this.coverInfo[0].description = value;
    console.log(this.nameVPMN);
  }
  get nameVPMN(): string | undefined {
    return this._nameVPMN;
  }

  public coverTitle: string = 'RAEX IOT Document';
  public coverInfo: any[] = [
    {
      title: 'VPMN',
      description: 'ARMOR'
    },
    {
      title: 'Sender',
      description: 'ARMOR'
    },
    {
      title: 'Submission Date',
      description: '2015-12-29'
    },
    {
      title: 'IOT Effective Date',
      description: '2016-01-01'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
