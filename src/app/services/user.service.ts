import { Injectable } from '@angular/core';
import { User } from '../../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userArray: User[] = [];

  constructor() { }

  siginUp(user: User){
    let findUser = this.userArray.find(x=> x.email == user.email);
    if (typeof findUser == 'undefined') {
      //nije pronasao i moze da ga doda i moze da ide na login page...
      this.userArray.push(user);
      return true;
    }
    else {
      //vrati da ga je pronasao i ne moze da se doda znaci ne moze ici na login page...
      return false;
    }
  }
}
