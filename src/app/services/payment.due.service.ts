import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDueService {

  baseurl: string ='http://localhost:3000/paymentDue/';
  response: any ;

  constructor(private httpClient : HttpClient) { }

  getPaymentDueDetails(userName: string){

    console.log("In Payment Due Service");
    return this.httpClient.get(this.baseurl+userName);
    
    
  }
}