import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tadig-list',
  templateUrl: './tadig-list.component.html',
  styleUrls: ['./tadig-list.component.scss']
})
export class TadigListComponent implements OnInit {

  public filteredTadigsList: DisplayedTadig[] = [];

  public tadigsList: DisplayedTadig[] = [
    {
      id: '0',
      code: 'ARMOR'
    },
    {
      id: '1',
      code: 'LBNFL'
    },
    {
      id: '2',
      code: 'RUSNW'
    },
    {
      id: '3',
      code: 'LBNLC'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.filteredTadigsList = this.tadigsList;
  }

  onFilterTadig($event: any) {
    console.log($event.target.value);
    this.filteredTadigsList = this.tadigsList.filter((tadig) => tadig.code.toLowerCase().startsWith($event.target.value.toLowerCase()));
  }

  onViewPress(tadigId: number): void {
    this.router.navigate(['/tadig/tadig-pdf/', tadigId]);
  }

}

interface DisplayedTadig {
  id: string,
  code: string,
}
