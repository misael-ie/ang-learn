import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/restaurant-detail/shopping-cart/shopping-cart.model';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  @Input() items!:CartItem[]

  @Output() _increaseQuantity = new EventEmitter<CartItem>()
  @Output() _decreaseQuantity = new EventEmitter<CartItem>()
  @Output() _removeItem = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQuantity(item: CartItem){
    this._increaseQuantity.emit(item)
  }

  emitDecreaseQuantity(item: CartItem){
    this._decreaseQuantity.emit(item)
  }

  emitRemoveItem(item: CartItem){
    this._removeItem.emit(item)
  }

}
