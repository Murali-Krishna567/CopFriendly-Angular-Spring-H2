import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Complaint } from '../complaint';
import { RegistrationService } from '../service/data/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-traffic-form',
  templateUrl: './traffic-form.component.html',
  styleUrls: ['./traffic-form.component.css']
})
export class TrafficFormComponent implements OnInit {
  complain=new Complaint();
  constructor(private service:RegistrationService,private route:Router) { }

  ngOnInit(): void {
  }
  
  registerComplain(){
    this.service.registerCom(this.complain).subscribe(
      data=>{
        console.log("response receieved");
        this.route.navigate(['/complaint']);
      },
      error=>{
        console.log("errror");
      }
    )
  }

}
