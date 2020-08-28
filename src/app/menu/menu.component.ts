import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/data/registration.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isuserloggedIn:boolean=false
  constructor(public RegService:RegistrationService) { }

  ngOnInit(): void {
   // this.isuserloggedIn=this.RegService.isloggedin();
  }

}
