import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InitService } from '../init.service';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title : string;

  constructor(private initService: InitService, public loginService: LoginService, private router : Router) {
     console.log(initService.config)
     
  }

  ngOnInit() {
  }

  searchBox(event){
    console.log(event);
  }

  handleLogout(){
    this.loginService.handleLogout();
    this.router.navigateByUrl("/recipes");
  }

}
