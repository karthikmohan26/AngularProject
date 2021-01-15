import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseurl: string ='http://localhost:3000/payments/';
  response: any ;

  constructor(private httpClient : HttpClient) { }

  getPaymentDetails(userName: string){

    console.log("In Payment Service");
    return this.httpClient.get(this.baseurl+"1");
    
    
  }
}
