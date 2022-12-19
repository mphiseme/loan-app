/*
Title: home.component.ts
Author: Manel Phiseme
Date: 18 December 2022
Description: loan app
*/

import { Component, OnInit } from '@angular/core';
import { calculatorData } from '../calculator.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//assigned value to from intergace to variable calEntry
  calEntry: calculatorData = {
    intRt: 0,
    lnAmt: 0,
    lnYr: 0,
  };

  payInMonths: number =0;
  interestPay:number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  //this function do the calculations
  calculate(){
    let interest: number = this.calEntry.intRt/100/12;
   let NumOfYrPay: number = this.calEntry.lnYr *12;

   //monthly payment formula
   this.payInMonths = this.calEntry.lnAmt * (interest *Math.pow((1 + interest),NumOfYrPay))
  /(Math.pow((1 + interest),NumOfYrPay ) -1)

  //interest paid formula
   this.interestPay = this.payInMonths * NumOfYrPay - this.calEntry.lnAmt;

   console.log(this.payInMonths, this.interestPay)

    return (this.payInMonths).toFixed(2), (this.interestPay).toFixed(2);


  }


}
