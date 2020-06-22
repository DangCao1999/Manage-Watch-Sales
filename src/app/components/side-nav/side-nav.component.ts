import { Component, OnInit } from '@angular/core';
import { UsergoogleService } from 'src/app/service/usergoogle.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogadduserComponent } from './dialogadduser/dialogadduser.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(public dialog: MatDialog,public userService: UsergoogleService) { }
  ngOnInit(): void {
    //console.log(this.userService.);
  }
  clickadduser(){
      this.dialog.open(
        DialogadduserComponent
      )
  }
}
