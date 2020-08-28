import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../service/data/registration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Safety } from './../safety';

@Component({
  selector: 'app-sos',
  templateUrl: './sos.component.html',
  styleUrls: ['./sos.component.css']
})
export class SosComponent implements OnInit {

  safe=new Safety();
  lat:string='';
  lng:string='';
  log:boolean =false
  location:string
  type:string
  msg="Sent Successfully"
  constructor(private service:RegistrationService,private rout:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.safe.phoneNumber= "+91";
  }
  getloc(){
    this.service.getLocation().subscribe(
      data=>{
        console.log(data);
        this.lat=data.latitude
        this.lng=data.longitude
      },
      error=>{
        console.log("exception occured");
      }
    )  
  }

  sendsms(){
    this.safe.message="----------NEED BACKUP !!----------"+"\n"+"Issue:"+this.type+"\n"+"LOCATION : " +"http://www.google.com/maps/place/"+this.lat+","+this.lng;
    this.service.sendSOS(this.safe).subscribe(
      data=>{
        this.log=true
        console.log("Sent Sucessfully")
        this.router.navigate(['sos'])
      },
      error=>{ 
        this.log=false
        console.log("Exception occured")
      }
    )
  }

}
