import { Component, Inject, OnInit } from '@angular/core';
import { DIALOG_DATA, DIALOG_REF, DialogRef } from 'src/app/shared/dialog/dialog-ref';

@Component({
  selector: 'app-edit-field-dialog',
  templateUrl: './edit-field-dialog.component.html',
  styleUrls: ['./edit-field-dialog.component.scss']
})
export class EditFieldDialogComponent implements OnInit {

  constructor(
    @Inject(DIALOG_DATA) public data: any,
    @Inject(DIALOG_REF) private dialog_ref: DialogRef<any>,
  ) { }

  ngOnInit(): void {
  }

  onSave() {
    this.dialog_ref.close({
      canceled: false,
    });
  }

  onCancel() {
    this.dialog_ref.close({
      canceled: true,
    });
  }

}
