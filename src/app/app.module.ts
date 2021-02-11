import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { DateComponent } from './date/date.component';
import { AgentsComponent } from './agents/agents.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaymentService } from './services/payment.service';
import { PaymentAcivityComponent } from './payment-acivity/payment-acivity.component';
import { PaymentActivityService } from './services/paymentActivity.service';
import { UnathorizedComponent } from './unathorized/unathorized.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DateComponent,
    AgentsComponent,
    LoginComponent,
    PaymentAcivityComponent,
    UnathorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService, PaymentService ,PaymentActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
