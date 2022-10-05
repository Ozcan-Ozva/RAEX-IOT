import { DocumentHeader } from './../../../../models/document-header/document-header';
import { Component, OnInit } from '@angular/core';
import { ReadingJsonService } from 'src/app/services/read-json.service';

@Component({
  selector: 'app-document-header',
  templateUrl: './document-header.component.html',
  styleUrls: ['./document-header.component.scss']
})
export class DocumentHeaderComponent implements OnInit {

  public documentHeader: DocumentHeader | undefined;

  constructor(public readingJsonService: ReadingJsonService) { }

  ngOnInit(): void {
    this.readingJsonService.getJSON('assets/jsonFiles/documentHeader.json')
    .subscribe((data) => {
      console.log(data);
      this.documentHeader = data;
      console.log(this.documentHeader);
    })
  }

}
