import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../service/data/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user=new User();
  constructor(private service:RegistrationService,private route:Router) { }
  

  ngOnInit(): void {
  }
  registerUser(){
    this.service.register(this.user).subscribe(
      data=>{
        console.log("response receieved");
        this.route.navigate(['']);
      },
      error=>{
        console.log("Exception Occured");
      }
      
    );
  }
}
