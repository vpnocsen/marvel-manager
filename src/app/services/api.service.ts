import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const apikey = 'f56f5553a791d99b695486205fd38589';
const hash = 'd904a44b6aba076580f4fcab53f0987a';

@Injectable({
  providedIn: 'root'
})
export class ApiServices {

  constructor(private http: HttpClient) { }

  getCharacters(offset) {
    const url = 'https://gateway.marvel.com:443/v1/public/characters';
    return this.http.get(`${url}?offset=${offset}&apikey=${apikey}&hash=${hash}&ts=1`, {
      observe: 'body'
    }).pipe(map((res: any) => res.data));
  }

  getCharacterDetail(charId: number) {
    const url = 'https://gateway.marvel.com:443/v1/public/characters';
    return this.http.get(`${url}/${charId}?apikey=${apikey}&hash=${hash}&ts=1`, {
      observe: 'body'
    }).pipe(map((res: any) => res.data));
  }

  getComics(charId: number) {
    const url = 'https://gateway.marvel.com:443/v1/public/characters';
    return this.http.get(`${url}/${charId}/comics?apikey=${apikey}&hash=${hash}&ts=1`, {
      observe: 'body'
    }).pipe(map((res: any) => res.data));
  }
}
