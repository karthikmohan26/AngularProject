import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentsComponent } from './agents/agents.component';
import { AutopayComponent } from './autopay/autopay.component';
import { LoginComponent } from './login/login.component';
import { PaymentAcivityComponent } from './payment-acivity/payment-acivity.component';
import { UnathorizedComponent } from './unathorized/unathorized.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
{path:'user',component:UsersComponent},
{path: 'agent', component:AgentsComponent},
{path: 'login', component:LoginComponent},
{path:'',component:LoginComponent},
{path: 'payment' ,component:PaymentAcivityComponent} ,
{path: 'unAthourized',component:UnathorizedComponent} ,
{path: 'autoPay',component:AutopayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
