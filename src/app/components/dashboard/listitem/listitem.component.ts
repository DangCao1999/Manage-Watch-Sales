import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { WatchInfo } from 'src/app/interface/watchInfo';
import { MaxLengthValidator } from '@angular/forms';
import { WatchsService } from 'src/app/service/watchs.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogdeleteitemComponent } from '../dialogdeleteitem/dialogdeleteitem.component';
import { Router } from '@angular/router';
import { state } from '@angular/animations';


@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent implements OnInit {
  displayedColumns: string[] = ['Image','Name', 'Amount', 'Sex', 'Price (VND)','Action'];
  //dataSource: WatchInfo[] = this.watch_service.dataWatch;
  constructor(private router: Router,public watch_service: WatchsService, public dialog: MatDialog) {}
  
  testclick(index)
  {
    //console.log(index)
    //this.Watchs.splice(index,1);
    //console.log(this.Watchs);
  }
  modifyclick(item: WatchInfo)
  {
    this.router.navigate(['/watch/'+item.id], {state: item})
  }
  deleteclick(watch)
  {
    this.dialog.open(DialogdeleteitemComponent, {data: watch})
  }
  ngOnInit(): void {
    console.log(this.watch_service.dataWatch)
    //console.log(this.watch_service.dataWatch)
    //this.watch_service.getWatchs();
  }
}
