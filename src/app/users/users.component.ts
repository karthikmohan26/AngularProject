import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  lastPaymentDate: string ="10/06/2020";
  lastPaymentAmt  : string ="";
  nextPaymentDate: string ="11/28/2020";
  nextPaymentAmt:string="$258.75";
  accountBalance: string="$1007.05";
  policyNumber:string ="46 SBM RQ9167";
  response: any;
  
  constructor(private svc: PaymentService) { }

   
  ngOnInit(): void {

    //this.svc.getPaymentDetails("1").
    //subscribe(
      //(response)=>{this.response=response;
  //});
  //this.lastPaymentAmt="100";
  //console.log("Payment Amount from API"+this.response.lastPaymentAmount);
}
}