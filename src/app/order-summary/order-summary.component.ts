import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  usrExp!:number

  public orderUXRated(rated:number) {
    console.log(`UX rate: ${rated}`);
    this.usrExp = rated
  }
  
  constructor() { }

  ngOnInit() {
  }

}
