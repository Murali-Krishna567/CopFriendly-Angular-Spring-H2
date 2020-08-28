import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/data/registration.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private Reg:RegistrationService) { }

  ngOnInit(){
    this.Reg.logout();
  }

}
