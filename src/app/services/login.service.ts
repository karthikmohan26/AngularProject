import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../model/login.model';
import{catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl: string ='http://localhost:3000/users/';

  constructor(private httpClient : HttpClient) { }

  getUser(userName: string){

    console.log("Inside LoginService"+userName);
    console.log("url :"+this.baseurl+userName);
    return this.httpClient.get(this.baseurl+userName);
  }

}