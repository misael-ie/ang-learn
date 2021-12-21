import { Component, ErrorHandler, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { RestaurantsService } from '../restaurants/restaurants.service';

@Component({
  selector: 'zero-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})

export class RestaurantDetailComponent implements OnInit {

  restaurant!: Restaurant
  
  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.restaurantsService.getRestaurantById(
      this.route.snapshot.params['id'])
    .subscribe(response => this.restaurant = response)
  }

}
