import { DocumentHeader } from '../../../../../../../../models/document-header/document-header';
import { Component, Input, OnInit } from '@angular/core';
import { Dialog } from 'src/app/shared/dialog/dialog.service';
import { EditFieldDialogComponent } from '../edit-field-dialog/edit-field-dialog.component';

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

  constructor(public dialog: Dialog) { }

  ngOnInit(): void {
  }

  editField() {
    this.dialog
      .open<any, any>(
        EditFieldDialogComponent,
        {},
        {
          message: 'Hello this work'
        }
      )
      .result.pipe()
      .subscribe((result: any) => {
        if (!result.canceled) {
          console.log('Yes');
          console.log(result);
        }
      });
  }

}
