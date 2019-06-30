import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GameInfo, PostResponse } from '../app.models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  defaultUrl = 'https://api.myjson.com/bins/d14tb';

  constructor(private httpClient: HttpClient) {}

  getSavedGame(url: string) {
    return this.httpClient.get<GameInfo>(url || this.defaultUrl);
  }

  saveGame(gameInfo: GameInfo) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.httpClient.post<PostResponse>(
      'https://api.myjson.com/bins',
      JSON.stringify(gameInfo),
      httpOptions
    );
  }
}
