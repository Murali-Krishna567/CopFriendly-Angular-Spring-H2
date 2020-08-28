import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/data/registration.service';
import { Medical } from '../medical';
import { Safety } from '../safety';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  safe=new Safety()
  log:boolean
  dat:Medical[];
  medical:any;
  constructor(private service:RegistrationService,private router:Router) { }

  ngOnInit(): void {
    this.safe.phoneNumber= "+918885288871";
  }
  fetchEmer(){
    this.service.fetchEmergency(this.medical).subscribe(
      data=>{
        this.dat=data;
        console.log(this.dat);
        console.log("response received")
      },
      error=>{
        console.log("error Ocurred")
      }
    )
  }

  // gososo(){
  //   //this.safe.message="----------Need Ambulance !!----------"+"\n"+"PEOPLE AFFECTED : "+ this.dat[0].people+"\n"+"ISSUE : "+this.dat[0].accidenttype+"\n"+"LOCATION : " +this.dat[0].location;
  //   this.service.sendSOS(this.safe).subscribe(
  //     data=>{
  //       this.log=true
  //       console.log("Sent Sucessfully")
  //       this.router.navigate(['medico'])
  //     },
  //     error=>{ 
  //       this.log=false
  //       console.log("Exception occured")
  //     }
  //   )
  // }

}
