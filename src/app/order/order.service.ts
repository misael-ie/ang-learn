import { Injectable } from '@angular/core';
import { CartItem } from '../restaurant-detail/shopping-cart/shopping-cart.model';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';

@Injectable()
export class OrderService {

    constructor(
        private _cartService: ShoppingCartService
    ) { }

    cartItems(): CartItem[] {
        return this._cartService.items
    }

    increaseQuantity(item: CartItem){
        this._cartService.increaseQuantity(item)
    }

    decreaseQuantity(item: CartItem){
        this._cartService.decreaseQuantity(item) 
    }

    removeItem(item:CartItem){
        this._cartService.removeItem(item)
    }

}
