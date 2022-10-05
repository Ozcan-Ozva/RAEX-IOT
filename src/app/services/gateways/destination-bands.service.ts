import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DestinationBands } from 'src/app/models/destination-bands/destination-bands';
import { ReadingJsonService } from '../read-json.service';

/* const ENDPOINTS = {
    getPosts: 'posts/getPosts',
    getOnePost: (id: number) => `posts/${id}/getOnePost`,
}; */

const jsonFilePath = 'assets/jsonFiles/destinationBands.json';

@Injectable()
export class DestinationBandsGateway {
  constructor(private readingJsonService: ReadingJsonService) {}

  fetchAll() : Observable<DestinationBands[]> {
    return this.readingJsonService
      .getJSON(jsonFilePath)
      .pipe(map((data) => DestinationBands.fromDTOArray(data)));
  }
}
