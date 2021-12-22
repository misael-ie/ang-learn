import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantsService } from 'src/app/restaurants/restaurants.service';
import { Reviews } from './reviews.model';


@Component({
  selector: 'restaurant-detail-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {
  @Input() reviews!: Observable<Reviews[]>

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // TODO: simplificar
    let response= this.restaurantsService.getRestaurantReviewsById(
      this.route.parent?.snapshot.params['id'])
    
    response.forEach(element => {
      element.forEach(review => {
        review.imgReact = this.mapImageReactionsByRating(review.rating)
      })
    })

    this.reviews = response
  }

  mapImageReactionsByRating(rating:any):string {
    if (rating > 4) {
        return 'assets/img/reactions/loved.png'
    } 
    else if (rating > 3 && rating < 4) {
        return 'assets/img/reactions/soso.png'
    }
    else {
        return 'assets/img/reactions/pissed.png'
    }
  }








  
}
