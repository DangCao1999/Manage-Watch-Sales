import { Component, OnInit } from '@angular/core';
import { UsergoogleService } from 'src/app/service/usergoogle.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(public userGG: UsergoogleService,) { }
  email = new FormControl("",[Validators.required, Validators.email]);
  pass = new FormControl("");
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getPassError(){
    if(this.pass.hasError('required')) return 'You must enter a value'
  }
  ngOnInit(): void {
  }
  loginwithEmailPass()
  {
    this.userGG.loginwithEmail(this.email.value, this.pass.value);
  }
  loginwithGG()
  {
    this.userGG.loginGoogle();
  }
}
