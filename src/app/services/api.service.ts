import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  public getEpisode() {
    return this.httpClient.get('https://swapi.co/api/films/1/');
  }

  public getStarShip(url: string){
    console.log('parametro:' + url);
    return this.httpClient.get(url);
  }
}
