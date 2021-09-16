import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { User } from '../Model/user';
import { UserService } from '../app/services/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;
  http: any;
  

  login(userName: string, password: string): Observable<any> {
    let findUser = this.userService.findUser(userName, password);

    if(typeof findUser == 'undefined'){//user not found
      this.isUserLoggedIn = false;
      localStorage.setItem('isUserLoggedIn', "false"); 
      return of(this.isUserLoggedIn).pipe(
        delay(1000),
        // tap(val => {
        //   console.log("Is User Authentication is not successful: " + val);
        // })
      );
    }
    else{ //user found
      this.isUserLoggedIn = true;
      localStorage.setItem('isUserLoggedIn', "true"); 
      localStorage.setItem('LoginUser', userName);
      return of(this.isUserLoggedIn).pipe(
        delay(1000),
        // tap(val => {
        //   console.log("Is User Authentication is successful: " + val);
        // })
      );
    }
 }
 
  logout(): void {
    this.isUserLoggedIn = false;
       localStorage.removeItem('isUserLoggedIn'); 
       localStorage.removeItem('LoginUser'); 
       this.router.navigate(['']); 
    }

  constructor(private userService: UserService, private router : Router) { }
}
