import { Component, OnInit } from '@angular/core';
import { CartItem } from '../restaurant-detail/shopping-cart/shopping-cart.model';
import { RadioOption } from '../shared/validators/forms/radio/radio-option.model';
import { Order, OrderItem } from './order.module';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  // TODO: change to a api caller
  private _defaultDeliveryCost: number = 8

  // TODO: improve with a domain class
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

  itemsCost(): number{
    return this._orderService.itemsCost()
  }

  deliveryCost(): number{
    let _cartItemsExists = this.cartItems().length!==0
    if (_cartItemsExists) {
      return this._defaultDeliveryCost
    } else {
      return 0
    }
  }

  _cartItemsToOrderItems(_cartItems:CartItem){
    return new OrderItem(_cartItems.quantity, _cartItems.menuItem.id)
  }

  checkOrder(order: Order){
    order.orderItems = this.cartItems()
      .map((_cartItems)=>this._cartItemsToOrderItems(_cartItems))

    this._orderService.checkOrder(order)
    .subscribe(
      (orderId:string) => {
        console.log(`Compra concluída: ${orderId}`);
        this._orderService.clearCart()
      }
    )
    console.log(order)
  }  
}
