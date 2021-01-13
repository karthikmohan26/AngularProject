import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  message : string ="Application is Available from 8 A.M. EST to 8:0 PM EST";
  Date : String = new Date().toDateString();
  
  constructor() { }

  ngOnInit(): void {
  }

}
