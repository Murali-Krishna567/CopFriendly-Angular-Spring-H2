import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { EntryComponent } from './entry/entry.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { TrafficFormComponent } from './traffic-form/traffic-form.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapsComponent } from './maps/maps.component';
import { PaymentComponent } from './payment/payment.component';
import { CentralComponent } from './central/central.component';
import { MedicoComponent } from './medico/medico.component';
import { StatusComponent } from './status/status.component';
import { SosComponent } from './sos/sos.component';
import { StartComponent } from './start/start.component'; 
 import { NgImageSliderModule } from 'ng-image-slider';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    EntryComponent,
    MenuComponent,
    RegisterComponent,
    ComplaintComponent,
    TrafficFormComponent,
    EmergencyComponent,
    MapsComponent,
    PaymentComponent,
    CentralComponent,
    MedicoComponent,
    StatusComponent,
    SosComponent,
    StartComponent,
    FooterComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgImageSliderModule,
    AgmCoreModule.forRoot({
      apiKey:''
    })

      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
