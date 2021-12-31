import { NgModule } from '@angular/core';
import { OrderService } from '../order/order.service';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { LoggedInGuard } from '../security/guards/loggedin.guard';
import { LoginService } from '../security/login/login.service';
import { NotificationService } from '../shared/messages/notification.service';

@NgModule({
    providers: [
        ShoppingCartService,
        RestaurantsService,
        OrderService,
        NotificationService,
        LoginService,
        LoggedInGuard
    ],
})
export class CoreModule { }
