import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'zero-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants!: Restaurant[]

  constructor(
    private restaurantsService: RestaurantsService
    ) { }

  ngOnInit(): void {
    this.restaurantsService.getRestaurantsList()
      .subscribe(response => this.restaurants = response)
  }
}
