import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails = {
    email : "",
    password : ""
  }

  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit() {
  }
  
  handleLogin(){
    this.loginService.checkLogin(this.loginDetails.email, this.loginDetails.password);
    if(this.loginService.isLoggedIn)
      this.router.navigateByUrl("/recipes");
    else
      alert("Login Failed!");
  }
}
