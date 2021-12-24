import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/validators/forms/radio/radio-option.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {
      label: 'Dinheiro',
      value: 'MON'
    },
    {
      label: 'Pix',
      value: 'PIX'
    },
    {
      label: 'Cartão Crédito',
      value: 'CRE'
    },
    {
      label: 'Cartão Débito',
      value: 'DEB'
    },
    {
      label: 'Cartão Refeição',
      value: 'REF'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
