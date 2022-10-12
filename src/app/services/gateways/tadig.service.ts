import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DestinationBands } from 'src/app/models/destination-bands/destination-bands';
import { Tadig } from 'src/app/models/tadig/tadig';
import { ReadingJsonService } from '../read-json.service';

/* const ENDPOINTS = {
    getPosts: 'posts/getPosts',
    getOnePost: (id: number) => `posts/${id}/getOnePost`,
}; */

/* const jsonFilePath = 'assets/jsonFiles/RUSNW.json'; */
/* const jsonFilePath = 'assets/jsonFiles/LBNFL.json'; */
const jsonFilePath = [
  'assets/jsonFiles/armor.json',
  'assets/jsonFiles/LBNFL.json',
  'assets/jsonFiles/RUSNW.json',
  'assets/jsonFiles/LBNLC.json',
];

@Injectable()
export class TadigGateway {
  constructor(private readingJsonService: ReadingJsonService) {}

  /* fetchAll() : Observable<DestinationBands[]> {
    return this.readingJsonService
      .getJSON(jsonFilePath)
      .pipe(map((data) => DestinationBands.fromDTOArray(data)));
  } */
  fetchOne(id: number) : Observable<Tadig> {
    return this.readingJsonService
      .getJSON(jsonFilePath[id])
      .pipe(map((data) => Tadig.fromDTO(data.data)));
  }
}
