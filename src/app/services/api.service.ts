import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  public getEpisode() {
    // return this.httpClient.get(`https://swapi.co/api/films/1/`);
    return this.httpClient.get('https://swapi.co/api/films/1/');
  }

}
