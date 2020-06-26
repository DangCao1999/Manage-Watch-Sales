import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { UsergoogleService } from '../service/usergoogle.service';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
@Injectable()
export class LoginGuard implements CanActivate {

    constructor(public afauth: AngularFireAuth, public router: Router, public user_service: UsergoogleService) { }


   async canActivate() {
        //console.log(this.user_service.logged);
        //await this.user_service.getUserGG();
        await this.afauth.onAuthStateChanged((user) => {
            if (user) {
                return true;
            }
            else {
                window.alert("You don't have permission to view this page"); (4)
                this.router.navigate(['login'])
                return false;
            }
        });
        return true;

    }
}