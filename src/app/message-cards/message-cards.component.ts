import { Component, OnInit, Input } from '@angular/core';
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
  selector: 'app-message-cards',
  templateUrl: './message-cards.component.html',
  styleUrls: ['./message-cards.component.scss']
})

export class MessageCardsComponent implements OnInit {
  @Input() title: string;
  @Input() avatar: string;
  @Input() contentAlt: string;
  @Input() contentType: string;
  @Input() contentUrl: string;
  @Input() likes: number;
  @Input() postTime: string;
  @Input() shares: string;
  @Input() textContent : string;
  constructor() { 
   // console.log(this.msg);
  }

  ngOnInit() {
  }

}
