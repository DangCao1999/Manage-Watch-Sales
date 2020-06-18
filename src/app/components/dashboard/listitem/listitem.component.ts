import { Component, OnInit } from '@angular/core';
import { WatchInfo } from 'src/app/interface/watchInfo';
import { MaxLengthValidator } from '@angular/forms';


@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent implements OnInit {
  
  
  constructor() { }
  Watchs: WatchInfo[] = [
    {
      name: 'test1',
      SL: 34,
      sex: 'male',
      photoURL: 'https://www.dangquangwatch.vn//upload/product/1237549702_dong-ho-chinh-hang-15.jpg'
    },
    {
      name: 'test2',
      SL: 35,
      sex: 'female',
      photoURL: 'https://www.dangquangwatch.vn//upload/product/1237549702_dong-ho-chinh-hang-15.jpg'
    },
    {
      name: 'test3',
      SL: 36,
      sex: 'male',
      photoURL: 'https://www.dangquangwatch.vn//upload/product/1237549702_dong-ho-chinh-hang-15.jpg'
    }
  ]
  testclick(index)
  {
    //console.log(index)
    this.Watchs.splice(index,1);
    //console.log(this.Watchs);
  }
  ngOnInit(): void {
  }

}
