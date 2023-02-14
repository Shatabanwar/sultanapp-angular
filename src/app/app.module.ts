import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

import { OpeningComponent } from './components/opening/opening.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatInputModule} from '@angular/material/input'; 
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './components/payment/payment.component';
import {MatButtonModule} from '@angular/material/button';
import { ChattingComponent } from './components/chatting/chatting.component';
import { NetworkingComponent } from './components/networking/networking.component';
import { JobsearchComponent } from './components/jobsearch/jobsearch.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { OtpComponent } from './components/otp/otp.component';
import { ResetComponent } from './components/reset/reset.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    RegisterComponent,
    HomeComponent,
  
    OpeningComponent,
    PaymentComponent,
    ChattingComponent,
    NetworkingComponent,
    JobsearchComponent,
    ThankyouComponent,
    OtpComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
    

   
   
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
