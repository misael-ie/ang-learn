import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { OrderService } from '../order/order.service';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { LeaveOrderPageGuard } from '../security/guards/leaveOrderPage.guard';
import { LoggedInGuard } from '../security/guards/loggedin.guard';
import { LoginService } from '../security/login/login.service';
import { AuthInterceptor } from '../shared/interceptors/auth.interceptor';
import { NotificationService } from '../shared/messages/notification.service';

@NgModule({
    providers: [
        ShoppingCartService,
        RestaurantsService,
        OrderService,
        NotificationService,
        LoginService,
        LoggedInGuard,
        LeaveOrderPageGuard,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
    ],
})
export class CoreModule { }
