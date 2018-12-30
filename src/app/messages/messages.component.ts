import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service'
export interface Tile {
 // color: string;
 // cols: number;
 // rows: number;
  text: string;
}
export interface Config {
  heroesUrl: string;
  textfile: string;
}
export interface MsgData {
  title: string;
  Avatar: string;
  contentAlt: string;
  contentType: string;
  contentUrl: string;
  likes: number;
  postTime: string;
  shares: string;
  textContent : string;
}
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One'},
    {text: 'Two'},
    {text: 'Three'},
    {text: 'Four'},
    {text: 'Three'},
    {text: 'Four'}
  ];
  msgData : MsgData;
  config : Config;
  jsonData: MsgData;
  newObj: MsgData
  constructor(private msgService : MessageServiceService ) { }
  showConfig() {
    this.msgService.getConfig()
    .subscribe((data: MsgData) => {
      console.log(data);
      this.msgData = data;
    });
  }
  loadMore() {
    // let a = this.msgService.loadMore();
    this.msgService.getConfig()
    .subscribe((data: MsgData) => {
      console.log(data);
    });
  }
  ngOnInit() {
    this.showConfig();
  }

}
