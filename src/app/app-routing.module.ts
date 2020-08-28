import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MapsComponent } from './maps/maps.component';
import { EntryComponent } from './entry/entry.component';
import { RegisterComponent } from './register/register.component';
import { RouteGuardService } from './service/route-guard.service';
import { ComplaintComponent } from './complaint/complaint.component';
import { EmergencyComponent } from './emergency/emergency.component'; 
import { TrafficFormComponent } from './traffic-form/traffic-form.component';
import { PaymentComponent } from './payment/payment.component';
import { CentralComponent } from './central/central.component';
import { MedicoComponent } from './medico/medico.component';
import { StatusComponent } from './status/status.component';
import { SosComponent } from './sos/sos.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path:'',component:StartComponent},
  //{path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'complaint',component:ComplaintComponent,canActivate:[RouteGuardService]},
  {path:'trafficform',component:TrafficFormComponent,canActivate:[RouteGuardService]},
  {path:'emergencyform',component:EmergencyComponent},
  {path:'entry',component:EntryComponent,canActivate:[RouteGuardService]},
  {path:'payment',component:PaymentComponent},
  {path:'maps', component:MapsComponent},
  {path:'central',component:CentralComponent},
  {path:'medico',component:MedicoComponent},
  {path:'status',component:StatusComponent},
  {path:'sos',component:SosComponent},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]}

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
