import { Component, OnInit } from '@angular/core';
import { PaymentActivityService } from '../services/paymentActivity.service';

@Component({
  selector: 'app-payment-acivity',
  templateUrl: './payment-acivity.component.html',
  styleUrls: ['./payment-acivity.component.css']
})
export class PaymentAcivityComponent implements OnInit {

  paymentActivityDate:string="";
  paymentActivityAmount :string="";
  response2: any;

  constructor(private paymentActivityService: PaymentActivityService) {
    
  
   }

  ngOnInit() {

    this.paymentActivityService.getPaymentActivityDetails("1").
    subscribe(
      (response2)=>{this.response2=response2;
        this.paymentActivityAmount= this.response2.paymentActivityAmount;
        this.paymentActivityDate=this.response2.paymentActivityDate;
        console.log("Payment Activity Amount"+this.paymentActivityAmount)
        
      })
        
      }
    }
  
