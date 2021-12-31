import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
import { CartItem } from '../restaurant-detail/shopping-cart/shopping-cart.model';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { Order } from './order.model';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { MEAT_API } from '../app.api';
import { ErrorHandlerDefault } from '../app.error-handler';
import { LoginService } from '../security/login/login.service';

@Injectable()
export class OrderService {

    constructor(
        private _cartService: ShoppingCartService,
        private _http: HttpClient,
        private _loginService: LoginService
    ) { }

    cartItems(): CartItem[] {
        return this._cartService.items
    }

    increaseQuantity(item: CartItem) {
        this._cartService.increaseQuantity(item)
    }

    decreaseQuantity(item: CartItem) {
        this._cartService.decreaseQuantity(item)
    }

    removeItem(item: CartItem) {
        this._cartService.removeItem(item)
    }

    itemsCost(): number {
        return this._cartService.total()
    }

    checkOrder(order: Order): Observable<string> {
        const _url:string = `${MEAT_API}/orders`
        const _body:string = JSON.stringify(order)
        return this._http.post<string>(_url, _body)
            .pipe(map((response)=>JSON.stringify(response))) 
            .pipe(tap((response)=>console.log(response)))
            .pipe(catchError(ErrorHandlerDefault.handleHttpErrorResponse))  
    }

    clearCart(): void{
        this._cartService.clear()    
    }
}
