import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChattingComponent } from './components/chatting/chatting.component';
import { HomeComponent } from './components/home/home.component';
import { JobsearchComponent } from './components/jobsearch/jobsearch.component';
import { LoginComponent } from './components/login/login.component';
import { NetworkingComponent } from './components/networking/networking.component';
import { OpeningComponent } from './components/opening/opening.component';
import { OtpComponent } from './components/otp/otp.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetComponent } from './components/reset/reset.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';


const routes: Routes = [

 { path:'',
  component:HomeComponent,
  pathMatch:'full'
},
{

  path:'login',
  component:LoginComponent,
  pathMatch:'full'

},{
  
  path:'register',
  component:RegisterComponent,
  pathMatch:'full'



},
{
  
  path:'reset',
  component:ResetComponent,
  pathMatch:'full'



},
{
  
  path:'home',
  component:HomeComponent,
  pathMatch:'full'



},


{
  
  path:'payment',
  component:PaymentComponent,
  pathMatch:'full'



},
{
  
  path:'chatting',
  component:ChattingComponent,
  pathMatch:'full'



},
{
  
  path:'network',
  component:NetworkingComponent,
  pathMatch:'full'



},
{
  
  path:'job',
  component:JobsearchComponent,
  pathMatch:'full'



},

{
  
  path:'thankyou',
  component:ThankyouComponent,
  pathMatch:'full'



},
{
  
  path:'otp',
  component:OtpComponent,
  pathMatch:'full'



}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
