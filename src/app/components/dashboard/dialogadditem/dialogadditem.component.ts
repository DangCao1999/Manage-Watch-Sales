import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
@Component({
  templateUrl: './dialogadditem.component.html',
  styleUrls: ['./dialogadditem.component.scss']
})
export class DialogadditemComponent implements OnInit {
  options: FormGroup;
  constructor(public firestore: AngularFirestore,public dialogRef: MatDialogRef<DialogadditemComponent>, private fb: FormBuilder) {
    this.options = this.fb.group({
      name: '',
      amount: '',
      sex: '',
      price: '',
      photo: '',
    });
  }



  ngOnInit(): void {
  }


  addclick() {
    //this.firestore.collection('Watchs').add(this.options.value);
    console.log(this.options.value);
  }
  cancelClick() {
    this.dialogRef.close();
  }
}
