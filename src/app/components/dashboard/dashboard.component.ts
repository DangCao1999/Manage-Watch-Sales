import { Component, OnInit } from '@angular/core';
import { UsergoogleService } from 'src/app/service/usergoogle.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogadditemComponent } from './dialogadditem/dialogadditem.component';
import { WatchsService } from 'src/app/service/watchs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public user_service: UsergoogleService, public dialog: MatDialog, public watch_service: WatchsService) { }

  ngOnInit(): void {
    
  }
  search(event){
    let value_input = event.target.value;
    console.log(value_input);
    this.watch_service.search(value_input);
  }
  cancel(){
    this.watch_service.cancelsearch();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(
      DialogadditemComponent
    );
  }
}
