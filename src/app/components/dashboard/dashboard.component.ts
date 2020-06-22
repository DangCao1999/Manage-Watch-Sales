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

  openDialog(): void {
    const dialogRef = this.dialog.open(
      DialogadditemComponent
    );
  }
}
