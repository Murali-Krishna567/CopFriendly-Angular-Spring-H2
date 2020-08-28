import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { User } from 'src/app/user';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Complaint } from 'src/app/complaint';
import { Medical } from 'src/app/medical';
import { Safety } from 'src/app/safety';
import { Amount } from 'src/app/amount';

interface Location {
  latitude: string;
  longitude: string;
  // country_name: string;
  // country_calling_code: string;
  // city: string;
  // ip: 0;
}
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  user=new User();
  complaint=new Complaint();
  safety= new Safety();
  constructor(private http:HttpClient,private route:Router,private rout:ActivatedRoute) { }
  public login(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:8060/login",user);
  }
  public register(user:User):Observable<any>{
    return this.http.post<any>('http://localhost:8060/register',user);
  }
  public isloggedin(){
    let use= sessionStorage.getItem("authuser");
    return !(use==null);
   
  }
  public registerCom(complaint:Complaint):Observable<any>{
    return this.http.post<any>("http://localhost:8060/complain",complaint);
  }

  public regisamt(amount:Amount):Observable<any>{
    return this.http.post<any>("http://localhost:8060/amt",amount);
  }

   public sendSOS(safety:Safety):Observable<any>{
     return this.http.post<any>("http://localhost:8060/twil/sms",safety);
   }
  public fetchvno( vehicleno:string):Observable<Complaint[]>{
    return this.http.get<Complaint[]>(`http://localhost:8060/complain/${vehicleno}`);
  }
 public fetchamt():Observable<number>{
     return this.http.get<number>("http://localhost:8060/getsum");
   }
  public registerCase(Medical:Medical):Observable<any>{
    return this.http.post<any>("http://localhost:8060/emergency",Medical);
  }
  public fetchEmergency(Medical:Medical):Observable<any>{
    return this.http.get<any>("http://localhost:8060/medico");
  }
  public fetchall(complaint:Complaint):Observable<any>{
    return this.http.get<any>("http://localhost:8060/violations");
  }
  
   public deletebyphoneno(phoneno:string){
     return this.http.delete(`http://localhost:8060/complaint/${phoneno}`)
   }
   getLocation() {
    return this.http.get<Location>("http://api.ipapi.com/157.44.89.123?access_key=87c1b192a9add1694998486471dfa67c");
  }

  public logout(){
    sessionStorage.removeItem('authuser');
     
  }

}
