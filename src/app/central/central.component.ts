import { Component, OnInit, Input } from '@angular/core';
import { RegistrationService } from '../service/data/registration.service';
import { Complaint } from '../complaint';
import { Amount } from '../amount';


@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit {
  constructor(private service:RegistrationService) { }
  dat:Complaint[];
  log:boolean=false
  complaint: any;
  amt:number=0
  ngOnInit(): void {
    this.getamt();
  }
  fetchAll(){
    this.service.fetchall(this.complaint).subscribe(
      data=>{
        this.dat=data;
        console.log(this.dat)
        console.log("response Received");
      },
      error=>{
        console.log("error Occured")
      }
    )

  }
getamt(){
  this.service.fetchamt().subscribe(
    data=>{
      console.log(data);
      this.amt=data;
      console.log(this.amt)
      this.log=true;
    },
    error=>{
      console.log("exception occured");
    }
  )

}  

}
