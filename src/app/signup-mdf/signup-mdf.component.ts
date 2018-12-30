import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ModalBodyComponent } from '../modal-body/modal-body.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
@Component({
  selector: 'app-signup-mdf',
  templateUrl: './signup-mdf.component.html',
  styleUrls: ['./signup-mdf.component.scss']
})
export class SignupMdfComponent implements OnInit {
  signup: FormGroup;
  constructor(fb:FormBuilder, private modal: MatDialogRef<ModalBodyComponent>) { 
    this.signup = fb.group({
      "fname" : ["",Validators.required],
      "lname" : ["", Validators.required],
      "mobile" : ["+91",Validators.required],
      "email" : ["",Validators.required],
      "dob" : ["",Validators.required],
      "password" : ["",Validators.required],
      "cpassword" : ["",Validators.required]

    })
    
  }
  onSubmitModelBased() {
    console.log("model-based form submitted");
    console.log(this.signup);
    this.modal.close();
}
closeBtn() {
  this.modal.close();
}
  ngOnInit() {
  }

}
