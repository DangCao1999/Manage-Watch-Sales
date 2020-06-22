import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WatchInfo } from 'src/app/interface/watchInfo';
import { WatchsService } from 'src/app/service/watchs.service';

@Component({
  templateUrl: './dialogdeleteitem.component.html',
  styleUrls: ['./dialogdeleteitem.component.scss']
})
export class DialogdeleteitemComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialogdeleteitemComponent>, @Inject(MAT_DIALOG_DATA) public data: WatchInfo, public watch_service: WatchsService) { }
  cancelclick(){
    this.dialogRef.close();
  }
  deleteclick(){
    this.watch_service.deleteWatchs(this.data);
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
