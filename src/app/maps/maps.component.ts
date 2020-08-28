
import { Component, OnInit, NgZone, ElementRef, ViewChild, Input } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationService } from '../service/data/registration.service';
import { Safety } from '../safety';
import { Router } from '@angular/router';
declare var H: any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat:string='';
  lng:string='';
   location:Object
   safe=new Safety()
  log:boolean
   constructor(private service:RegistrationService,private router:Router){

   }
  public ngOnInit() {  
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
    this.safe.message="----------Need Ambulance !!----------"+"\n"+"LOCATION : " +"http://www.google.com/maps/place/"+this.lat+","+this.lng; //https://www.latlong.net/c/?lat=17.054938&long=79.271271
    this.service.sendSOS(this.safe).subscribe(
      data=>{
        this.log=true
        console.log("Sent Sucessfully")
        this.router.navigate(['maps'])
      },
      error=>{ 
        this.log=false
        console.log("Exception occured")
      }
    )
  }

}  