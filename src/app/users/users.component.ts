import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  lastPaymentDate: string ="10/06/2020";
  lastPaymentAmt  : string ="$98.98";
  nextPaymentDate: string ="11/28/2020";
  nextPaymentAmt:string="$258.75";
  accountBalance: string="$1007.05";
  policyNumber:string ="46 SBM RQ9167";
  constructor() { }

  ngOnInit(): void {
  }

}
