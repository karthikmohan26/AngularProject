import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/login.model';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  lastPaymentDate: string ="";
  lastPaymentAmt  : string ="";
  policyNumber:string ="";
  nextPaymentDate: string ="";
  nextPaymentAmt:string="";
  accountBalance: string="";
  response1: any;
  userName:string="";
  
  constructor(private svc: PaymentService) { }

   
  ngOnInit() {

    console.log("User Name to User Component" +window.history.state.userName);
    this.userName=window.history.state.userName;
    this.svc.getPaymentDetails(this.userName).
    subscribe(
      (response1)=>{this.response1=response1;
        this.lastPaymentAmt= this.response1.lastPaymentAmount;
        this.policyNumber=this.response1.policyNumber;
        this.lastPaymentDate=this.response1.lastPaymentDate;
        this.nextPaymentDate=this.response1.nextPaymentDate;
        this.nextPaymentAmt=this.response1.nextPaymentAmt;
        this.accountBalance=this.response1.accountBalance;
      })
  
}
}