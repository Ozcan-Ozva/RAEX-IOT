import { Component, Input, OnInit } from '@angular/core';
import { TimeBands } from 'src/app/models/timebands/timebands';

@Component({
  selector: 'app-time-bands',
  templateUrl: './time-bands.component.html',
  styleUrls: ['./time-bands.component.scss']
})
export class TimeBandsComponent implements OnInit {

  private _timeBands: TimeBands[] = [];
  @Input() set timeBands(value: TimeBands[]) {
    this._timeBands = value;
    this.getDisplayedDestinationBandsNameList();
    console.log("this is timeBands");
    console.log(this._timeBands);
  }
  get timeBands(): TimeBands[] {
    return this._timeBands;
  }

  columnData = [
    { field: 'start_time', header: 'Start time' },
    { field: 'end_time', header: 'End time' },
    { field: 'weekdays', header: 'Weekdays' },
    { field: 'special_days', header: 'Special days' },
  ];

  displayedTimeBandsGroup: DisplayedTimeBands[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  getDisplayedDestinationBandsNameList() {
    this.timeBands.forEach((element) => {
      if (
        this.displayedTimeBandsGroup.find(
          (destination) =>
            destination.time_band_name === element.timeband_name
        ) == undefined
      ) {
        this.displayedTimeBandsGroup.push({
          time_band_name: element.timeband_name,
          displayed_band_attribute: [],
        });
      }
      this.displayedTimeBandsGroup
        .find(
          (destination) =>
            destination.time_band_name === element.timeband_name
        )
        ?.displayed_band_attribute.push({
          start_time: element.start_time,
          end_time: element.end_time,
          weekdays: element.weekdays,
          special_days: element.special_days,
        });
    });
    console.log(this.displayedTimeBandsGroup);
  }

}

interface DisplayedTimeBands {
  time_band_name: string | undefined;
  displayed_band_attribute: {
    start_time: string | undefined;
    end_time: string | undefined;
    weekdays: string | undefined;
    special_days: string | undefined;
  }[];
}