import { Component, Input, OnInit } from '@angular/core';
import { PaymentActivityService } from '../services/paymentActivity.service';

@Component({
  selector: 'app-payment-acivity',
  templateUrl: './payment-acivity.component.html',
  styleUrls: ['./payment-acivity.component.css']
})
export class PaymentAcivityComponent implements OnInit {

  paymentActivityDate:string="";
  paymentActivityAmount :string="";
  paymentActivity: any;
  @Input('userName') userName:string;

  constructor(private paymentActivityService: PaymentActivityService) {
    
  
   }

  ngOnInit() {

    console.log("User Name in Payment Activity"+this.userName)

    this.paymentActivityService.getPaymentActivityDetails(this.userName).
    subscribe(
      (paymentActivity)=>{this.paymentActivity=paymentActivity;
        this.paymentActivityAmount= this.paymentActivity.paymentActivityAmount;
        this.paymentActivityDate=this.paymentActivity.paymentActivityDate;
        console.log("Payment Activity Amount"+this.paymentActivityAmount)
        
      })
        
      }
    }
  
