import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ReadingJsonService {
  //private _jsonURL = 'assets/SampleJson.json';

  constructor(private http: HttpClient) {}

  public getJSON(jsonURL: string): Observable<any> {
    console.log(jsonURL);
    return this.http.get(jsonURL).pipe(
      catchError(() => {
        return [];
      })
    );
  }
}
