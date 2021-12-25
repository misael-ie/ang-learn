import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OrderItemsComponent } from './order-items/order-items.component';
import { OrderComponent } from './order.component';

import { RouterModule, Routes } from '@angular/router';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';

export const ROUTES: Routes = [
    { path: '', component: OrderComponent },
]

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [],
    declarations: [
        OrderComponent,
        OrderItemsComponent,
        DeliveryCostsComponent
    ],
    providers: [],
})
export class OrderModule { }
