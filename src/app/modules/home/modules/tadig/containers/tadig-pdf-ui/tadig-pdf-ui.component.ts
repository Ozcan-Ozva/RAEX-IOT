import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tadig } from 'src/app/models/tadig/tadig';
import { TadigGateway } from 'src/app/services/gateways/tadig.service';

@Component({
  selector: 'app-tadig-pdf-ui',
  templateUrl: './tadig-pdf-ui.component.html',
  styleUrls: ['./tadig-pdf-ui.component.scss'],
})
export class TadigPdfUiComponent implements OnInit {
  public tadig: Tadig | undefined;
  public tadigId: number = 0;

  constructor(private tadigGateway: TadigGateway, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.tadigId = +params['id'];
      console.log('this is tadig id');
      console.log(this.tadigId);
    });
  }

  ngOnInit(): void {
    this.tadigGateway.fetchOne(this.tadigId).subscribe((data) => {
      console.log(data);
      this.tadig = data;
    });
  }
}
