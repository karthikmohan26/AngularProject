import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentActivityService {

  baseurl: string ='http://localhost:3000/paymentActivity/';

  constructor(private httpClient : HttpClient) { }

  getPaymentActivityDetails(userName: string){

    console.log("Inside PaymentActivityService"+userName);
    console.log("url :"+this.baseurl+userName);
    return this.httpClient.get(this.baseurl+userName);
  }
}
