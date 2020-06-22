import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { WatchInfo } from 'src/app/interface/watchInfo';
import { WatchsService } from 'src/app/service/watchs.service';
@Component({
  templateUrl: './dialogadditem.component.html',
  styleUrls: ['./dialogadditem.component.scss']
})
export class DialogadditemComponent implements OnInit {
  options: FormGroup;
  constructor(public watch_service: WatchsService ,public firestore: AngularFirestore,public dialogRef: MatDialogRef<DialogadditemComponent>, private fb: FormBuilder) {
    this.options = this.fb.group({
      name: '',
      amount: '',
      sex: '',
      price: '',
      photoURL: '',
    });
  }



  ngOnInit(): void {
  }


  addclick() {
    //this.firestore.collection('Watchs').add(this.options.value);
    let watch: WatchInfo;
    watch = this.options.value;
    this.watch_service.postWatchs(watch);
    this.dialogRef.close();
  }
  cancelClick() {
    this.dialogRef.close();
  }
}
