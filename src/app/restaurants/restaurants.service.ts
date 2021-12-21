import { Restaurant } from './restaurant/restaurant.model';
import { MEAT_API } from '../app.api';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { ErrorHandlerDefault } from '../app.error-handler';
@Injectable()
export class RestaurantsService {
  restaurantsUrl = `${MEAT_API}/restaurants`

  constructor(private http: HttpClient) { }

  /**
   * getRestaurantsList
   */
  public getRestaurantsList(): Observable<Restaurant[]> {
      return this.http.get<Restaurant[]>(this.restaurantsUrl)
      .pipe(catchError(ErrorHandlerDefault.handleHttpErrorResponse))
  }

}
