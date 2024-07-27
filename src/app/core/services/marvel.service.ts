import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { MarvelResponse } from '../models/marvel.model';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private apiUrl = 'http://localhost:3000';
  constructor(
    
    private http: HttpClient
  ) { }

  getAllComics(): Observable<MarvelResponse> {
    const timeoutDuration = 60000;
    return this.http.get<MarvelResponse>(this.apiUrl).pipe(
      timeout(timeoutDuration)
    );;
  }
}
