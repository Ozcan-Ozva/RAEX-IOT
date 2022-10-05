import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-of-content',
  templateUrl: './table-of-content.component.html',
  styleUrls: ['./table-of-content.component.scss'],
})
export class TableOfContentComponent implements OnInit {
  sections: any[] = [
    {
      title: 'Document Header',
      pageNumber: '2',
      subPage: [],
    },
    {
      title: 'VPMN TADIG codes',
      pageNumber: '2',
      subPage: [],
    },
    {
      title: 'Currency info',
      pageNumber: '2',
      subPage: [],
    },
    {
      title: 'Tax definition',
      pageNumber: '2',
      subPage: [],
    },
    {
      title: 'Special days',
      pageNumber: '2',
      subPage: [],
    },
    {
      title: 'Time bands',
      pageNumber: '2',
      subPage: [],
    },
    {
      title: 'Destination bands',
      pageNumber: '2',
      subPage: [],
    },
    {
      title: 'APN bands',
      pageNumber: '2',
      subPage: [],
    },
    {
      title: 'Charging policy',
      pageNumber: '2',
      subPage: [],
    },
    {
      title: 'Call types',
      pageNumber: '2',
      subPage: [
        {
          title: 'MOC',
          pageNumber: '3',
        },
        {
          title: 'MTC (Charged always)',
          pageNumber: '3',
        },
        {
          title: 'MOSMS',
          pageNumber: '3',
        },
        {
          title: 'MTSMS',
          pageNumber: '3',
        },
        {
          title: 'PSData',
          pageNumber: '3',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
