import { Component, OnInit } from '@angular/core';
import { CartItem } from '../restaurant-detail/shopping-cart/shopping-cart.model';
import { RadioOption } from '../shared/validators/forms/radio/radio-option.model';
import { OrderService } from './order.service';

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

  constructor(
    private _orderService: OrderService
  ) { }

  ngOnInit() {
  }

  cartItems(): CartItem[] {
    return this._orderService.cartItems()
  }

  
  increaseQuantity(item: CartItem){
    this._orderService.increaseQuantity(item)
  }

  decreaseQuantity(item: CartItem){
    this._orderService.decreaseQuantity(item) 
  }

  removeItem(item: CartItem){
    this._orderService.removeItem(item)
  }


}
