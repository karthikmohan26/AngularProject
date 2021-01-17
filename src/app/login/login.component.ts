import { Component, OnInit } from '@angular/core';
import { User } from '../model/login.model';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string ;
  password: string;
  response: any;
  error ="";
  logInForm!: FormGroup; //declaring our form variable

 
  constructor(private svc : LoginService, private router: Router) {
  this.userName="";
  this.password="";

  }

  ngOnInit() {

    this.logInForm = new FormGroup({
      userName: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })

  }

  onSubmit() {

    console.log("Submit Clicked");
    this.userName=this.logInForm.get('userName')?.value;
    let obs= this.svc.getUser(this.userName);
    obs.subscribe(
      (response)=>{this.response=response;
      console.log("After Response to Component"+this.response.userName);
      console.log("After Response to Component the Login form "+this.logInForm.get('userName')?.value);
      if(this.logInForm.get('userName')?.value==this.response.userName 
      && this.logInForm.get('password')?.value==this.response.password && 
        this.response.role=="User") {

      this.router.navigate(['user']);
    }
    else {
    this.router.navigate(['agent']) ;
    }
  }
      
      )
      
    }

  

}
