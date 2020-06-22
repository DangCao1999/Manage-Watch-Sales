import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { WatchInfo } from '../interface/watchInfo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class WatchsService {
  dataWatch: WatchInfo[] = [
    // {name: 'hello', sex: "male", photoURL: "ass", price: "123", amount: 12}
  ]
  private endpoint = "http://localhost:8080/watch";
  constructor(private _snackBar: MatSnackBar, private httpClient: HttpClient, public fb: AngularFirestore) {
    this.getWatchs();
  }
  checkWatchs() {
    console.log(this.dataWatch)
  }
  getWatchs() {
    let watchs: WatchInfo;
    let query = this.fb.collection("Watchs").snapshotChanges().subscribe((data) => {
      this.dataWatch.length = 0;
      data.forEach((value) => {
        watchs = value.payload.doc.data() as WatchInfo;
        watchs.id = value.payload.doc.id;
        this.dataWatch.push(watchs);
      })
    })
    console.log(this.dataWatch);
  }
  postWatchs(watch: WatchInfo) {
    this.httpClient.post(this.endpoint, watch).subscribe((res) => {
      this.openSnackBar(res['mess']);
    })
  }
  updateWatchs(watch: WatchInfo) {
    console.log(watch)
    this.httpClient.put(this.endpoint, watch).subscribe((res) => {
      this.openSnackBar(res['mess'])
    });
  }
  deleteWatchs(watch: WatchInfo) {
    this.httpClient.patch(this.endpoint, watch).subscribe((res) => {
      this.openSnackBar(res['mess'])
    })
  }

  openSnackBar(mess) {
    this._snackBar.open(mess, "OK", {
      duration: 4000,
    });
  }
}
