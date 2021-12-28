import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import locatePt from '@angular/common/locales/pt'

registerLocaleData(locatePt, 'pt')

import { ROUTES } from './app.route';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { SharedModule } from './shared/shared.module';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { CoreModule } from './core/core.module';
import { PreloadAllModules } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser'; // @https://angular.io/guide/animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// @SharedModule
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { InputComponent } from './shared/validators/forms/input/input.component';
// import { RadioComponent } from './shared/validators/forms/radio/radio.component';
// import { RatingComponent } from './shared/analytics/user-experience/rating/rating.component';

// @OrderModule
// import { OrderComponent } from './order/order.component';
// import { OrderItemsComponent } from './order/order-items/order-items.component';
// import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';

// @CoreModule
// import { RestaurantsService } from './restaurants/restaurants.service';
// import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
// import { OrderService } from './order/order.service';

@NgModule({
  declarations: [		
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    ShoppingCartComponent,
    MenuComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent
    // InputComponent,          @SharedModule
    // RadioComponent,          @SharedModule
    // RatingComponent          @SharedModule
    // OrderComponent,          @OrderModule
    // OrderItemsComponent,     @OrderModule
    // DeliveryCostsComponent,  @OrderModule
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules}),
    HttpClientModule,
    RouterTestingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule
    // FormsModule,           @SharedModule
    // ReactiveFormsModule    @SharedModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    // {provide: RestaurantsService},     @CoreModule'
    // {provide: ShoppingCartService},    @CoreModule'
    // {provide: OrderService}            @CoreModule'
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
