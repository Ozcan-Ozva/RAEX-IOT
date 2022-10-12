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

  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
