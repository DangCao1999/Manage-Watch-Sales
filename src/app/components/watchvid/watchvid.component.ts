import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WatchInfo } from 'src/app/interface/watchInfo';
import { WatchsService } from 'src/app/service/watchs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watchvid',
  templateUrl: './watchvid.component.html',
  styleUrls: ['./watchvid.component.scss']
})
export class WatchvidComponent implements OnInit {
  options: FormGroup;
  myThumbnail = "";
  myFullresImage = "";
  zoommode = "hover";
  watch: WatchInfo;
  constructor(private router: Router, private fb: FormBuilder, private watch_service: WatchsService) {
    this.watch = history.state;
    this.options = this.fb.group({
      name: this.watch.name,
      amount: this.watch.amount,
      sex: this.watch.sex,
      price: this.watch.price,
      photoURL: this.watch.photoURL,
    });
    this.myFullresImage = this.watch.photoURL;
    this.myThumbnail = this.watch.photoURL;
   }
 
  ngOnInit(): void {
    
  }
  saveclick()
  {
    let watch_send: WatchInfo;
    watch_send = this.options.value;
    watch_send.id = this.watch.id;
    this.watch_service.updateWatchs(watch_send);
    this.router.navigate(['dashboard']);
  }
  cancelclick(){
    this.router.navigate(['dashboard']);
  }
}
