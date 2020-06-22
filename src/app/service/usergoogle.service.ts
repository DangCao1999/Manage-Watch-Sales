import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class UsergoogleService {
  user: User;
  _userGG: any;
  logged = false;

  constructor(private _snackBar: MatSnackBar, private _afAuth: AngularFireAuth, private _router: Router,) {
    this._afAuth.user.subscribe(usr => {
      if (usr != null) {
        this._userGG = usr;
        this.logged = true;
        this.setUser();
      } else { this.logged = false; }
    });

  }


  setUser() {
    this.user = {
      uid: this._userGG.uid,
      name: this._userGG.displayName,
      email: this._userGG.email,
      avatarURL: this._userGG.photoURL,
    }
  }
  async addNewUser(user_new: User, pass) {
    console.log(user_new)
    let tempUser = this._userGG;
    let provider = await this._afAuth.createUserWithEmailAndPassword(user_new.email, String(pass)).then((res) => {
       res.user.updateProfile({displayName: user_new.name}).then(()=>{
      this.loginGoogle().then(()=>{
        this.openSnackBar("Successful Add User");
      }).catch(()=>{
        this._router.navigate(['login'])
      }); 
      //    console.log(this.user);
      //    console.log(this._userGG);
        })
      
     
    }).catch(() => {
      this.openSnackBar("Something Wrong :(");
    });
  }
  async loginwithEmail(email, pass) {
    console.log(email)
    console.log(pass)
    let user = await this._afAuth.signInWithEmailAndPassword(email, pass).then(res => {
      this.openSnackBar("Successfully Logged In!")
      this._router.navigate(['dashboard']);
      
      // this.showMessage("success", "Successfully Logged In!");
      // this.isUserLoggedIn();
    }, err => {
      this.openSnackBar("Login Failed")
    });
  }
  async loginGoogle() {
    let provider = new auth.GoogleAuthProvider();
    let user = await this._afAuth.signInWithPopup(provider).then((result) => {
      this._userGG = result.user;
      this.setUser();
      this._router.navigate(['dashboard']);
    });
  }

  signOut() {
    this._afAuth.signOut().then(() => {
      this.user = null;
      this._userGG = null;
      this._router.navigate(["/"]);
    });
  }

  openSnackBar(mess) {
    this._snackBar.open(mess, "OK", {
      duration: 4000,
    });
  }
}
