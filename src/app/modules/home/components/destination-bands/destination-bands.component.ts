import { Component, OnInit } from '@angular/core';
import { DestinationBands } from 'src/app/models/destination-bands/destination-bands';
import { DestinationBandsGateway } from 'src/app/services/gateways/destination-bands.service';

@Component({
  selector: 'app-destination-bands',
  templateUrl: './destination-bands.component.html',
  styleUrls: ['./destination-bands.component.scss']
})
export class DestinationBandsComponent implements OnInit {

  destinationBands : DestinationBands[] = [];
  destinationBandsGroup: DestinationBandsGroup[] = [];
  displayedDestinationBandsGroup: DisplayedDestinationBands[] = [];

  columnData = [
    {field: 'destination_name', header: 'Destination Name'},
    {field: 'cc', header: 'CC'},
    {field: 'area_code', header: 'Area Code'},
    {field: 'identifier', header: 'Identifier'},
    {field: 'type', header: 'Type'},
  ];

  constructor(private destinationBandsService: DestinationBandsGateway) { }

  ngOnInit(): void {
    this.destinationBandsService.fetchAll()
    .subscribe((data) => {
      this.destinationBands = data;
      console.log('this is destination');
      console.log(this.destinationBands);
      console.log(this.destinationBands);
      this.getdestinationBandsNameList();
      this.getDisplayedDestinationBandsNameList();
    })
  }

  getdestinationBandsNameList() {
    this.destinationBands.forEach(element => {
      if (this.destinationBandsGroup.find((destination) => destination.destination_band_name === element.destination_band_name) == undefined){
        this.destinationBandsGroup.push({
          destination_band_name: element.destination_band_name,
          destination_bands: [],
        })
      }
      this.destinationBandsGroup.find((destination) => destination.destination_band_name === element.destination_band_name)?.destination_bands.push(element);
    });
    console.log(this.destinationBandsGroup);
  }

  getDisplayedDestinationBandsNameList() {
    this.destinationBands.forEach(element => {
      if (this.displayedDestinationBandsGroup.find((destination) => destination.destination_band_name === element.destination_band_name) == undefined){
        this.displayedDestinationBandsGroup.push({
          destination_band_name: element.destination_band_name,
          displayed_band_attribute: [],
        })
      }
      this.displayedDestinationBandsGroup.find((destination) => destination.destination_band_name === element.destination_band_name)?.displayed_band_attribute.push({
        destination_name: element.destination_name,
        cc: element.cc,
        area_code: element.area_code,
        identifier: `${element.identifier_type} - ${element.identifier_number}`,
        type: element.type
      });
    });
    console.log(this.displayedDestinationBandsGroup);
  }
}

interface DestinationBandsGroup {
  destination_band_name: string | undefined;
  destination_bands: DestinationBands[];
}

interface DisplayedDestinationBands {
  destination_band_name: string | undefined;
  displayed_band_attribute: {
    destination_name: string | undefined;
    cc: string | undefined;
    area_code: string | undefined;
    identifier: string | undefined;
    type: string | undefined;
  }[];
}
