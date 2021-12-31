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
    // //FIXME: é realmente necessário
    // private _headerBuilder(): HttpHeaders{
    //     const _header:HttpHeaders = new HttpHeaders()
    //     _header.append('Content-Type', 'application/json')
    //     // add a auth header
    //     if (this._loginService.isLoggedIn()) {
    //         console.log(`isLoggedIn: ${this._loginService.isLoggedIn()}`);
    //         _header.append('Authorization', `Bearer ${this._loginService.user.accessToken}`)
    //         console.log(`Token: ${this._loginService.user.accessToken}`);
    //     }
    //     console.log(`HEADER: ${JSON.stringify(_header)}`);
    //     return _header
    // }    

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
        let _headers = new HttpHeaders()
        if (this._loginService.isLoggedIn()) {
            _headers = _headers.append("Authorization", `Bearer ${this._loginService.user.accessToken}`)
        }
        _headers = _headers.append("Content-Type", "application/json")
        console.log(JSON.stringify(_headers));
        
        //FIXME: refatorar para incluir Order como tipo de retorno
        return this._http.post<string>(_url, _body, {headers:_headers})
            .pipe(map((response)=>JSON.stringify(response))) 
            .pipe(tap((response)=>console.log(response)))
            .pipe(catchError(ErrorHandlerDefault.handleHttpErrorResponse))  
    }

    clearCart(): void{
        this._cartService.clear()    
    }
}
