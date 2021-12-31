import { Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component"
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component"
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component"
import { RestaurantsComponent } from "./restaurants/restaurants.component"
import { MenuComponent } from "./restaurant-detail/menu/menu.component"
// import { OrderComponent } from "./order/order.component"
import { OrderSummaryComponent } from "./order-summary/order-summary.component"
import { NotFoundComponent } from "./not-found/not-found.component"
import { LoginComponent } from "./security/login/login.component"
import { LoggedInGuard } from "./security/guards/loggedin.guard"
import { LeaveOrderPageGuard } from "./security/guards/leaveOrderPage.guard"

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login/:to', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'order-summary', component: OrderSummaryComponent },

    // REVIEW: Lazy Loading
    // https://angular.io/guide/lazy-loading-ngmodules
    {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    },
    {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
        canLoad: [LoggedInGuard],
        canActivate: [LoggedInGuard]
    },
    { path: '**', component: NotFoundComponent }, // regra de 404 tem que ficar no final 
]