import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isUndefined } from 'util';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) {
     router.events.subscribe((_: NavigationEnd) =>{
       if (!isUndefined(_.url)) {
          this.currentUrl = _.url;
          console.log(this.currentUrl);
       }
      
     } );
  }


  ngOnInit() {
  }

}
