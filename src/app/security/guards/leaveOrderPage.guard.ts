
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs';
import { OrderComponent } from 'src/app/order/order.component';

export class LeaveOrderPageGuard implements CanDeactivate<OrderComponent>{
    constructor() { }


    canDeactivate(component: OrderComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        if (!component.isOrderCompleted()) {
            return window.confirm("Ao sair desta página, todos os dados serão perdidos. Deseja prosseguir?")
        } else {
            return true
        }
    }
}