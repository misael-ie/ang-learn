import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantsService } from 'src/app/restaurants/restaurants.service';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'restaurant-detail-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  menu!: Observable<MenuItem[]>

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = this.restaurantsService.getMenuOfRestaurant(
      this.route.parent?.snapshot.params['id']
    )

  }

  addMenuItem(item:MenuItem){
    console.log(item);
    
  }  

}
