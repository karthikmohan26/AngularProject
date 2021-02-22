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
  payment: any;
  userName:string="";
  
  constructor(private svc: PaymentService) { }

   
  ngOnInit() {

    console.log("User Name to User Component" +window.history.state.userName);
    this.userName=window.history.state.userName;
    this.svc.getPaymentDetails(this.userName).
    subscribe(
      (payment)=>{this.payment=payment;
        this.lastPaymentAmt= this.payment.lastPaymentAmount;
        this.policyNumber=this.payment.policyNumber;
        this.lastPaymentDate=this.payment.lastPaymentDate;
        this.nextPaymentDate=this.payment.nextPaymentDate;
        this.nextPaymentAmt=this.payment.nextPaymentAmt;
        this.accountBalance=this.payment.accountBalance;
      })
  
}
}