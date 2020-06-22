import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { UsergoogleService } from '../service/usergoogle.service';
@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router,private user_service: UsergoogleService) { }


    canActivate() {
        if (this.user_service.logged) {
            return true;
        }
        else {
            window.alert("You don't have permission to view this page"); (4)
            this.router.navigate(['login'])
            return false;

        }
    }
}