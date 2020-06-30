import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsergoogleService } from 'src/app/service/usergoogle.service';
import { User } from 'src/app/interface/user';

@Component({
  templateUrl: './dialogadduser.component.html',
  styleUrls: ['./dialogadduser.component.scss']
})
export class DialogadduserComponent implements OnInit {
  options: FormGroup;
  constructor(public dialog: MatDialog, private fb: FormBuilder, private user_service: UsergoogleService ) {
    this.options = this.fb.group({
      name: "" ,
      email: "",
      pass1: "",
      pass2: "",
      avatarURL: "",
    })
   }
  cancelClick(){
    this.dialog.closeAll()
  }
  addClick()
  {
    console.log(this.options.value.email);
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(this.options.value.email))
    if(!re.test(this.options.value.email))
    {
      this.user_service.openSnackBar("Email invalid");
      return
    }
    if(this.options.value.pass1 != this.options.value.pass2)
    {
      this.user_service.openSnackBar("PassWord not similar");
      return
    }
    let user_new: User;
    user_new = {
      name: this.options.value.name,
      email: this.options.value.email,
      avatarURL: "",
    }
    this.user_service.addNewUser(user_new, this.options.value.pass1);
    this.dialog.closeAll();
  }

  
  ngOnInit(): void {
  }

}
