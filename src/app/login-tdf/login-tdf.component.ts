import { Component, OnInit } from '@angular/core';
import { ModalBodyComponent } from '../modal-body/modal-body.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-login-tdf',
  templateUrl: './login-tdf.component.html',
  styleUrls: ['./login-tdf.component.scss']
})
export class LoginTdfComponent implements OnInit {
  user: Object = {};
  constructor(private modalWindow : MatDialogRef<ModalBodyComponent>) { }

  ngOnInit() {
  }
  loginSubmit() {
    console.log(this);
    this.modalWindow.close();
    window.location.pathname = 'userHome';
    window.sessionStorage.setItem('loggedinState','true');
  }
  closeBtn() {
    this.modalWindow.close();
  }
}
