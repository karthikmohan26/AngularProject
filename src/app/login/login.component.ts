import { Component, OnInit } from '@angular/core';
import { User } from '../model/login.model';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup} from '@angular/forms';

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
  //user!:User;
  loginform! : FormGroup ; 

 
  constructor(private svc : LoginService, private router: Router) {
  this.userName="";
  this.password="";  

  }

  ngOnInit() {

    this.loginform = new FormGroup({
      userName: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })

  }

  onSubmit() {

    console.log("Submit Clicked");
    this.userName=this.loginform.get('userName')?.value;
    this.password=this.loginform.get('password')?.value;
    let obs= this.svc.getUser(this.userName);
    obs.subscribe(
      (data)=>{this.response=data;
    if(this.userName===this.response.userName 
      && this.password===this.response.password && 
        this.response.role=="User") {

      this.router.navigate(['user'],{state:{userName:this.userName}});
    }
    else if (this.userName===this.response.userName 
    && this.password===this.response.password && 
      this.response.role=="Agent"){

    this.router.navigate(['agent']) ;
    }

    else {

      this.router.navigate(['unAthourized']) ;
    }
  }
      
      )
      
    }
}
