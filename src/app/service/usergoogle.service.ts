import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsergoogleService {
  user: User;
  user$: Observable<User>;
  _userGG: any;
  logged = false;
  firebaseauthstate = null;
  private endpoint = "https://radiant-anchorage-76186.herokuapp.com/user";
  constructor(private _snackBar: MatSnackBar,private httpClient: HttpClient, private _afAuth: AngularFireAuth, private _router: Router,) {
  
    this._afAuth.authState.subscribe((value)=>{
      this.firebaseauthstate = value;
      this.getUserGG();
    });

    this.checkCurrentUser();
    
  }

  checkCurrentUser() {
    return this.user$ = this._afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return 'true';
        } else {
          return of(null);
        }
      })
    )
  }


  get getauthenticated(): boolean{
    return this.firebaseauthstate !== null;
  }
  async getUserGG() {
    await this._afAuth.user.subscribe(usr => {
      console.log(usr);
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
  // async addNewUser(user_new: User, pass) {
  //   console.log(user_new)
  //   let tempUser = this._userGG;
  //   let provider = await this._afAuth.createUserWithEmailAndPassword(user_new.email, String(pass)).then((res) => {
  //     res.user.updateProfile({ displayName: user_new.name }).then(() => {
  //       this.loginGoogle().then(() => {
  //         this.openSnackBar("Successful Add User");
  //       }).catch(() => {
  //         this._router.navigate(['login'])
  //       });
  //       //    console.log(this.user);
  //       //    console.log(this._userGG);
  //     })


  //   }).catch(() => {
  //     this.openSnackBar("Something Wrong :(");
  //   });
  // }

  async addNewUser(user_new: User, pass)
  {
    let body = {
      'email': user_new.email,
      'displayName': user_new.name,
      'pass': pass,
    }
    this.httpClient.post(this.endpoint, body).subscribe((res)=>{
      console.log(res.toString());
      this._snackBar.open(res['mess'], "OK", {
        duration: 4000,
      });
    }, (err)=>{
      console.log(err);
      this._snackBar.open(err.error.mess, "OK", {
        duration: 4000,
      });
    })
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
      this.firebaseauthstate == null;
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
