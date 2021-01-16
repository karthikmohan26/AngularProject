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
  nextPaymentDate: string ="11/28/2020";
  nextPaymentAmt:string="$258.75";
  accountBalance: string="$1007.05";
  response1: any;
  
  constructor(private svc: PaymentService) { }

   
  ngOnInit() {

    this.svc.getPaymentDetails("1").
    subscribe(
      (response1)=>{this.response1=response1;
        this.lastPaymentAmt= this.response1.lastPaymentAmount;
        this.policyNumber=this.response1.policyNumber;
        this.lastPaymentDate=this.response1.lastPaymentDate;
        console.log("Lat Payment Date"+ this.lastPaymentDate);
      })
  
}
}