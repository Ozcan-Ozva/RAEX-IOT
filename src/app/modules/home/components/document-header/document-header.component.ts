import { DocumentHeader } from './../../../../models/document-header/document-header';
import { Component, Input, OnInit } from '@angular/core';
import { ReadingJsonService } from 'src/app/services/read-json.service';

@Component({
  selector: 'app-document-header',
  templateUrl: './document-header.component.html',
  styleUrls: ['./document-header.component.scss']
})
export class DocumentHeaderComponent implements OnInit {

  private _documentHeader: DocumentHeader | undefined;
  @Input() set documentHeader(value: DocumentHeader | undefined) {
    this._documentHeader = value;
  }
  get documentHeader(): DocumentHeader | undefined{
    return this._documentHeader === undefined ? undefined : this._documentHeader;
  }

 /*  public documentHeader: DocumentHeader | undefined */;

  constructor(public readingJsonService: ReadingJsonService) { }

  ngOnInit(): void {
    /* this.readingJsonService.getJSON('assets/jsonFiles/documentHeader.json')
    .subscribe((data) => {
      console.log(data);
      this.documentHeader = data;
      console.log(this.documentHeader);
    }) */
  }

}
