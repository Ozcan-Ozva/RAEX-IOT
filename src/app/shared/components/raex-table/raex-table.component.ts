import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-raex-table',
  templateUrl: './raex-table.component.html',
  styleUrls: ['./raex-table.component.scss']
})
export class RaexTableComponent implements OnInit {

  @Input() table_title: string | undefined;
  @Input() grid_data: any[] = [];
  @Input() column_data: ColumnData[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}

interface ColumnData {
  field: string;
  header: string;
}
