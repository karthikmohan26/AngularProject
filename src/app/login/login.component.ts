import { Component, OnInit } from '@angular/core';
import { User } from '../model/login.model';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string ;
  password: string;
  response: any;
  user: User = new User();
  error ="";


  
  constructor(private svc : LoginService, private router: Router) {
    this.userName="";
    this.password="";
   }

  ngOnInit() {


  }

  onSubmit() {

    alert("Submit Clicked");
    this.svc.getUser(this.userName).
    subscribe(
      (response)=>{this.response=response;}, 
    error=>{this.error="User not found"}
    );
    
    console.log(this.response);
    
    console.log("Entered user Name is"+this.userName);
    console.log("Response user Name is"+this.response.userName);

    if(this.userName==this.response.userName && this.password==this.response.password && 
      this.response.role=="User") {

      this.router.navigate(['user']);
    }
    else {
    this.router.navigate(['admin']) ;

    }
    }

  

}
