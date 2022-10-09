import { TadigGateway } from './../../services/gateways/tadig.service';
import { Component, OnInit } from '@angular/core';
import { Tadig } from 'src/app/models/tadig/tadig';
import { DocumentHeader } from 'src/app/models/document-header/document-header';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public tadig: Tadig | undefined;

  constructor(private tadigGateway: TadigGateway) { }

  ngOnInit(): void {
    this.tadigGateway.fetchOne()
    .subscribe((data) => {
      console.log(data);
      this.tadig = data;
    })
  }

  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
