import { Injectable } from "@angular/core"
import { NotificationService } from "src/app/shared/messages/notification.service"
import { MenuItem } from "../menu-item/menu-item.model"
import { CartItem } from "./shopping-cart.model"

@Injectable()
export class ShoppingCartService {

    items:CartItem[] = []

    constructor(
        private _notificationService: NotificationService
    ){}

    clear(){
        this.items = []
    }

    addItem(item:MenuItem){
        let itemAlreadyAdded = this.items.find(
            (cartItem) => cartItem.menuItem.id === item.id
        )
        if (itemAlreadyAdded) {
            this.increaseQuantity(itemAlreadyAdded)
        } else {
            this.items.push(new CartItem(item))
        }
        this._notificationService.notify(`Você adicionou o item ${item.name}`)

    }

    removeItem(item:CartItem){
        this.items.splice(
            this.items.indexOf(item), //TODO: entender splice e indexOf
            1
        )
        this._notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
    }

    total():number{
        return this.items.map(
            item => item.calcTotalValue()
        )
        .reduce(
            (prev, value) => prev+value,
            0 // TODO: entender essa implementação
        )
    }

    increaseQuantity(item:CartItem){
        item.quantity++
    }

    decreaseQuantity(item:CartItem){
        item.quantity--
        let _quantityZero = item.quantity === 0
        if (_quantityZero) {
            this.removeItem(item)
        }
    }
}