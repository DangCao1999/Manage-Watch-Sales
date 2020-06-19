import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { WatchInfo } from '../interface/watchInfo';

@Injectable({
  providedIn: 'root'
})
export class WatchsService {
  dataWatch:  WatchInfo[]= [

  ]
  private endpoint = "https://radiant-anchorage-76186.herokuapp.com/watch";
  constructor(private httpClient: HttpClient, public fb: AngularFirestore) { }
  getWatchs()
  {
    this.fb.collection('Watchs').get
  }
  postWatchs()
  {
    let watch: WatchInfo = {
      name: "test1111",
      sex: "male",
      SL: 35,
      photoURL: 'ádf',
      price: 120,
    }

    this.httpClient.post(this.endpoint, watch)
  }
  updateWatchs(watch: WatchInfo)
  {
      this.httpClient.put(this.endpoint, watch);
  }
}
