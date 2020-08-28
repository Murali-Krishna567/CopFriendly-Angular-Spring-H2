import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../service/data/registration.service';
import { Complaint } from '../complaint';
import { ActivatedRoute, Router } from '@angular/router';
import { WindowRefService, ICustomWindow } from './../service/window-ref.service';
import { Safety } from '../safety';
import { Amount } from '../amount';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private service:RegistrationService,private rout:ActivatedRoute,private zone: NgZone,
    private winRef: WindowRefService,private router:Router) { 
      this._window = this.winRef.nativeWindow;
    }
  vehicleno:string
  TRS:string
  phoneno:string
  Amount=new Amount();
  
  flag:boolean
  safe=new Safety();
  data :Complaint[];
  ngOnInit(): void {
    this.safe.phoneNumber= "+91";
    this.vehicleno=this.rout.snapshot.params['vehicleno'];
    this.phoneno=this.rout.snapshot.params['phoneno']
  }
  
  fetchChallans(){
    this.service.fetchvno(this.vehicleno).subscribe(
      data=> { 
        this.data=data;
        console.log(this.data);
        console.log("response receieved");
      },
      error=>{
        console.log("error");
      }
      
    )
   
  }
  
   
    
   
   

  private _window: ICustomWindow;
  public rzp: any;
 public options: any = {
    key: '', 
    name: 'E-CHALLAN',
    description: 'Violation',
   amount: 50000,  
    prefill: {
      name: 'E-CHALLAN',
      email: '',  
    },
    notes: {},
    theme: {
      color: '#3880FF'
    },
    handler: this.paymentHandler.bind(this),
        modal: {
          ondismiss: (() => {
            this.zone.run(() => {
              this.router.navigate(['/payment'])
            })
          })
        }
  };



   initPay(): void {
     this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
    this.rzp.open();
  }

  paymentHandler(res: any) {
   
   
    this.zone.run(() => {
      if(res.razorpay_payment_id !=null){
        this.TRS=res.razorpay_payment_id
         this.flag=true;
         this.Amount.amount=500
         this.safe.message="----------Tranasaction Sucessfull----------"+"\n"+"Rs. 500"+"sent to Cop-Seva"+"\n"+"Your Transaction id: "+this.TRS;
         this.service.deletebyphoneno(this.phoneno).subscribe(
           data=>{
             this.router.navigate(['payment'])
           },
           error=>{
             console.log("Exception occured")
           }
         )
         this.service.sendSOS(this.safe).subscribe(
          data=>{
            console.log("Sent Sucessfully")
            
          },
          error=>{ 
            console.log("Exception occured")
          }
        )

        this.service.regisamt(this.Amount).subscribe(
          data=>{
            console.log("stored success")
          },
          error=>{
            console.log("exception Occured")
          }
        )
      }
      else{
        this.flag=false;
        console.log("failed") 
      }
    });
  }

}
