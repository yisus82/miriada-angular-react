import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getSavedGame() {
    return this.httpClient.get('https://api.myjson.com/bins/d14tb');
  }
}
