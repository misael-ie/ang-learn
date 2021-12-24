import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-costs',
  templateUrl: './delivery-costs.component.html',
  styleUrls: ['./delivery-costs.component.css']
})
export class DeliveryCostsComponent implements OnInit {

  @Input() _deliveryCost!: number
  @Input() _itemsCost!: number

  constructor() { }

  ngOnInit() {
  }

  _totalCost(): number{
    return this._deliveryCost + this._itemsCost
  }

}
