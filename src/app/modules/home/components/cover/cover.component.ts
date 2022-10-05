import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

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
