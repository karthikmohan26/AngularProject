import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentDueService } from '../services/payment.due.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input('userName') userName:string;
  payment :any;
  paymentAmt:string='';
  paymentRemaining:boolean=false;


  constructor(private paymentDueService: PaymentDueService , private route:Router) {
    
  
  }

  ngOnInit() {

    console.log("User Name in Payment Due "+this.userName)

    this.paymentDueService.getPaymentDueDetails(this.userName).
    subscribe(
      (payment)=>{this.payment=payment;
        this.paymentAmt= this.payment.paymentDue;
         })
    


  }

  setUpAutoPay() {
 
    console.log("Button CLicked");
    this.route.navigate(['/autoPay']);

  }

}
