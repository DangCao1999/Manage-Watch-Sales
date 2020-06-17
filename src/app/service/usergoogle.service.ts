import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class UsergoogleService {
  user: User;
  _userGG: any;
  logged = false;

  constructor(private _afAuth: AngularFireAuth, private _router: Router,) {
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


}
