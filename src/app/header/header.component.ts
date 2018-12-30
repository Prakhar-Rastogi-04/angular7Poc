import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  loggedinStatus : boolean = (sessionStorage.getItem('loggedinState') == 'true') ? true : false;
  constructor() { }
  
  
  ngOnInit() {
    
  }

}
