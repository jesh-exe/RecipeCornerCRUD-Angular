import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;

  constructor() { }

  checkLogin(email: string, password: string) {
    this.isLoggedIn = email == "admin" && password == "admin" ? true : false;
  }

  handleLogout(){
    this.isLoggedIn = false;

  }

}
