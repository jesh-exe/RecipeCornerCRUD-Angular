import { Component, OnInit } from '@angular/core';
import { InitService } from '../init.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title : string;

  constructor(private initService: InitService) {
     console.log(initService.config)
     
  }

  ngOnInit() {
  }

  searchBox(event){
    console.log(event);
  }

}
