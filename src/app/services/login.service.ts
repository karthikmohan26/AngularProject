import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl: string ='http://localhost:3000/users/';

  constructor(private httpClient : HttpClient) { }

  getUser(userName: string){

    console.log("Inside LoginService"+userName);
    console.log("url"+this.baseurl+userName);
    return this.httpClient.get(this.baseurl+userName);
    console.log("After Response from Service");

    
  }
}
