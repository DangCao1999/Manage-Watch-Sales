import { Component, OnInit } from '@angular/core';
import { UsergoogleService } from 'src/app/service/usergoogle.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(public userGG: UsergoogleService,) { }

  ngOnInit(): void {
  }
  loginwithGG()
  {
    this.userGG.loginGoogle();
  }
}
