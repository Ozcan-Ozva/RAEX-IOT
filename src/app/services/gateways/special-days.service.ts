import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SpecialDays } from 'src/app/models/special-days/special-days';
import { ReadingJsonService } from '../read-json.service';

/* const ENDPOINTS = {
    getPosts: 'posts/getPosts',
    getOnePost: (id: number) => `posts/${id}/getOnePost`,
}; */

const jsonFilePath = 'assets/jsonFiles/specialDays.json';

@Injectable()
export class SpecialDaysGateway {
  constructor(private readingJsonService: ReadingJsonService) {}

  fetchAll() : Observable<SpecialDays[]> {
    return this.readingJsonService
      .getJSON(jsonFilePath)
      .pipe(map((specialDays) => SpecialDays.fromDTOArray(specialDays)));
  }

  /* getSpecialDays(filter: object): Observable<SpecialDays[]> {
        return this.readingJsonService.
            .get<User[]>(ENDPOINTS.fetchAll(), null, null, null, filter)
            .pipe(map((users) => User.fromDTOArray(users)));
    } */
}
