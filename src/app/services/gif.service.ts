import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GifService {

  apiKey = environment.GIPHY_API_KEY;
  gifsList$ = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {
  }

  getTopGifts(offset = '0') {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${this.apiKey}&limit=9&offset=${offset}`)
      .subscribe((resp: any) => {
        this.gifsList$.next(resp);
      });
  }

  searchGifByName(name: string, offset = '0') {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${name}&api_key=${this.apiKey}&limit=9&offset=${offset}`)
      .subscribe((resp: any) => {
        this.gifsList$.next(resp);
      });
  }

  getGifsResult(): any {
    return this.gifsList$.asObservable();
  }
}
