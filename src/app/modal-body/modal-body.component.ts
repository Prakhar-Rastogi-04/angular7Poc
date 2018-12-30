import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-modal-body',
  templateUrl: './modal-body.component.html',
  styleUrls: ['./modal-body.component.scss']
})
export class ModalBodyComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ) { }
  closeBtn() {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
