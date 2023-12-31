import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory:   string[] = [];
  private apiKey:         string = '6z38f5JaQjLC1V0pqGRkc37a76YuKPvY';
  private apiUrl:         string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if ( this._tagsHistory. includes( tag )) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag );
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0, 10);
  }

  searchTag(tag: string) :void {
    if ( tag.length === 0 ) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http.get<SearchResponse>(`${this.apiUrl}/search`, {params})
    .subscribe((res: any) => {

      this.gifList = res.data;




      console.log(this.gifList);
      });
  }
}
