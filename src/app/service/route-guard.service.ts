import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { RegistrationService } from './data/registration.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private serv:RegistrationService,private route:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean {
     if (sessionStorage.getItem("authuser") == "true") {
            return true;
        }else {
            this.route.navigate(["/login"]);
            return false;
        }
  }
}
