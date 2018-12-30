import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor(private http: HttpClient) { }
  configUrl = 'https://raw.githubusercontent.com/Prakhar-Rastogi-04/angular7Poc/dev/src/app/dummyJson/postCards.json';
  jsonData ; newObj;
  getConfig() {
    return this.http.get(this.configUrl);
  }
  loadMore() { console.log('aa');
   this.getConfig().subscribe((data)=>{
     console.log(data);
     this.jsonData =  data;
   }); 
   let key; 
  // let newObj;
   this.newObj = this.jsonData;
   for (key in this.jsonData) {
    this.newObj[this.newObj.length + key] = this.jsonData[key];
   }
   return this.newObj;
  }
  
}
