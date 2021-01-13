import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl: string ='http://localhost:3000/users/';
  response: any ;

  constructor(private httpClient : HttpClient) { }

  getUser(userName: string){

    console.log(userName);
    return this.httpClient.get(this.baseurl+userName);
    
    
  }
}
