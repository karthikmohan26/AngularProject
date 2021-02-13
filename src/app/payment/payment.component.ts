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
  response2 :any;
  paymentRemaining:string='';

  constructor(private paymentDueService: PaymentDueService , private route:Router) {
    
  
  }

  ngOnInit() {

    console.log("User Name in Payment Due "+this.userName)

    this.paymentDueService.getPaymentDueDetails(this.userName).
    subscribe(
      (response2)=>{this.response2=response2;
        this.paymentRemaining= this.response2.paymentDue;
                
      })
    


  }

  setUpAutoPay() {
 
    console.log("Button CLicked");
    this.route.navigate(['/autoPay']);

  }

}
