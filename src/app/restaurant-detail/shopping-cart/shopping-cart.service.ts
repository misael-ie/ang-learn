import { MenuItem } from "../menu-item/menu-item.model"
import { CartItem } from "./shopping-cart.model"

export class ShoppingCartService {

    items:CartItem[] = []

    constructor(){}

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

    }

    removeItem(item:CartItem){
        this.items.splice(
            this.items.indexOf(item), //TODO: entender splice e indexOf
            1
        )
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