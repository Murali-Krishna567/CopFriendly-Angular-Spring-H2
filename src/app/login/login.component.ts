import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { RegistrationService } from './../service/data/registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user=new User();
  err="Invalid Credentials"
  log=false
  constructor(private router:Router,private service:RegistrationService) { }

  ngOnInit(): void {
  }

  handle(){
    this.service.login(this.user).subscribe(
      data=>{console.log("response receieved");
      sessionStorage.setItem("authuser","true");
      this.log=false;
      this.router.navigate(['/entry']);
  },
      error =>{console.log("excepion occured");
      this.log=true;
 } );
  
}
  // handle(){
    
  //   if(this.hardAuth.authenticate(this.username,this.password)){
  //     this.router.navigate(['entry'])
  //     this.log=false
  //   }
  //   else
  //   {
  //     this.log=true
  //   }
  // }

}
