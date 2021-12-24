import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
import { CartItem } from '../restaurant-detail/shopping-cart/shopping-cart.model';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { Order } from './order.module';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { MEAT_API } from '../app.api';
import { ErrorHandlerDefault } from '../app.error-handler';

@Injectable()
export class OrderService {
    // TODO: create a headerBuilder to simplify
    private _headerBuilder(): HttpHeaders{
        const _header:HttpHeaders = new HttpHeaders()
        _header.append('Content-Type', 'application/json')
        return _header
    }    

    constructor(
        private _cartService: ShoppingCartService,
        private _http: HttpClient
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
        const _options:any = {headers: this._headerBuilder()}

        return this._http.post<string>(_url, _body, _options)
            .pipe(map((response)=>JSON.stringify(response))) 
            .pipe(tap((response)=>console.log(response)))
            .pipe(catchError(ErrorHandlerDefault.handleHttpErrorResponse))  
    }

    clearCart(): void{
        this._cartService.clear()    
    }
}
