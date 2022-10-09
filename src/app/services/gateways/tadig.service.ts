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

const jsonFilePath = 'assets/jsonFiles/armor.json';

@Injectable()
export class TadigGateway {
  constructor(private readingJsonService: ReadingJsonService) {}

  /* fetchAll() : Observable<DestinationBands[]> {
    return this.readingJsonService
      .getJSON(jsonFilePath)
      .pipe(map((data) => DestinationBands.fromDTOArray(data)));
  } */
  fetchOne() : Observable<Tadig> {
    return this.readingJsonService
      .getJSON(jsonFilePath)
      .pipe(map((data) => Tadig.fromDTO(data)));
  }
}
