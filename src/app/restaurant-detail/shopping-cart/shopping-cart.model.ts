import { MenuItem } from "../menu-item/menu-item.model";

// TODO: aplicar a mesma lógica para tratar as imgs do reviewComponent
export class CartItem {
    constructor(
        public menuItem: MenuItem,
        public quantity: number = 1){}

    calcTotalValue():number{
        return this.menuItem.price * this.quantity
    }
}