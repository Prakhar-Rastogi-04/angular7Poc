import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor(private http: HttpClient) { }
  configUrl = 'https://raw.githubusercontent.com/Prakhar-Rastogi-04/angular7Poc/dev/src/app/dummyJson/postCards.json';
  moreData = 'https://raw.githubusercontent.com/Prakhar-Rastogi-04/angular7Poc/dev/src/app/dummyJson/postCardMoreData.json';
  getConfig() {
    return this.http.get(this.configUrl);
  }
  loadMore() {
   return this.http.get(this.moreData);
  }
  
}
