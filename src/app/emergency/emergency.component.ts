import { Component, OnInit, ViewChild, ElementRef, NgZone} from '@angular/core';
import { Medical } from '../medical';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../service/data/registration.service';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import {} from '@angular/google-maps';
import { from } from 'rxjs';
import { Safety } from '../safety';
@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css']
})
export class EmergencyComponent implements OnInit {


  medical=new Medical();
  safe=new Safety();
  log:boolean =false
  location:string
  type:string
  msg="Sent Successfully"
   
  constructor(private service:RegistrationService,private route:Router,private MapsAPILoader:MapsAPILoader, private ngzone:NgZone) { }

  ngOnInit(): void {

  }
     
  registerCase(){
    this.service.registerCase(this.medical).subscribe(
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
