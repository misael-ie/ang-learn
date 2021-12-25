import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
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

  orderForm!: FormGroup

  // TODO: change this patterns to a specific component @ shared/...
  private _emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  private _numberPattern = /^[0-9]*$/
  static u_emailConfirmation(group: AbstractControl): ValidationErrors | null {
    const _email = group.get('email')
    const _emailConfirmation = group.get('emailConfirmation')
    const _isUndefined = (!_email || !_emailConfirmation)
    const _isDifferent = (_email?.value !== _emailConfirmation?.value)
    const _invalid =  _isUndefined && _isDifferent
    if (_invalid) {
      return {emailsNotMatch:true} // emails undefined && diferentes
    }
    return null // emails defined && iguais
  }


  // TODO: change to a api caller
  private _defaultDeliveryCost: number = 8

  // TODO: improve with a domain class and API caller
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
    private _orderService: OrderService,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    // init the formGroup
    this.orderForm = this._formBuilder.group({
      name: this._formBuilder.control('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: this._formBuilder.control('', [
        Validators.required,
        Validators.pattern(this._emailPattern)
      ]),
      emailConfirmation: this._formBuilder.control('', [
        Validators.required,
        Validators.pattern(this._emailPattern)
      ]),
      address: this._formBuilder.control('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      number: this._formBuilder.control('', [
        Validators.required,
        Validators.pattern(this._numberPattern)
      ]),
      optionalAddress: this._formBuilder.control(''),
      paymentOption: this._formBuilder.control('', [
        Validators.required])
    },
      { validator: OrderComponent.u_emailConfirmation }
    )
  }

  cartItems(): CartItem[] {
    return this._orderService.cartItems()
  }


  increaseQuantity(item: CartItem) {
    this._orderService.increaseQuantity(item)
  }

  decreaseQuantity(item: CartItem) {
    this._orderService.decreaseQuantity(item)
  }

  removeItem(item: CartItem) {
    this._orderService.removeItem(item)
  }

  itemsCost(): number {
    return this._orderService.itemsCost()
  }

  deliveryCost(): number {
    let _cartItemsExists = this.cartItems().length !== 0
    if (_cartItemsExists) {
      return this._defaultDeliveryCost
    } else {
      return 0
    }
  }

  _cartItemsToOrderItems(_cartItems: CartItem) {
    return new OrderItem(_cartItems.quantity, _cartItems.menuItem.id)
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
      .map((_cartItems) => this._cartItemsToOrderItems(_cartItems))

    this._orderService.checkOrder(order)
      .subscribe(
        (orderId: string) => {
          this._router.navigate(['/order-summary'])
          console.log(`Compra concluída: ${orderId}`);
          this._orderService.clearCart()
        }
      )
    console.log(order)
  }
}
