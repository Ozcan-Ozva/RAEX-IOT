import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-page',
  templateUrl: './pdf-page.component.html',
  styleUrls: ['./pdf-page.component.scss']
})
export class PdfPageComponent implements OnInit {

  @Input() pageHeader: boolean = true;
  @Input() pageHeaderTitle: string = 'VPMN: ARMOR Sender: ARMOR RAEX IOT Created: 2015-12-29 IOT Effective Date: 2016-01-01';
  @Input() pageFooter: boolean = true;
  @Input() pageFooterTitle: string = '1';

  constructor() { }

  ngOnInit(): void {
  }

}
