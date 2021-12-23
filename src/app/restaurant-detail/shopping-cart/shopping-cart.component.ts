import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';
import { CartItem } from './shopping-cart.model';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'restaurant-detail-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private shoppingCartService: ShoppingCartService

  ) { }

  ngOnInit() {
  }

  getItems(): CartItem[]{
    return this.shoppingCartService.items
  }

  getTotal(): number{
    return this.shoppingCartService.total()
  }

  clear(){
    this.shoppingCartService.clear()
  }

  removeItem(item: CartItem){
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: MenuItem){
    this.shoppingCartService.addItem(item)
  }

}
