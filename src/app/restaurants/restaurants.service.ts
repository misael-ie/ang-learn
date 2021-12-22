import { Restaurant } from './restaurant/restaurant.model';
import { MEAT_API } from '../app.api';
import { Injectable } from '@angular/core';
import { catchError, elementAt, map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { ErrorHandlerDefault } from '../app.error-handler';
import { Reviews } from '../restaurant-detail/reviews/reviews.model';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';
@Injectable()
export class RestaurantsService {
  restaurantsUrl = `${MEAT_API}/restaurants`

  constructor(private http: HttpClient) { }

  /**
   * getRestaurantsList
   */
  public getRestaurantsList(): Observable<Restaurant[]> {
      return this.http.get<Restaurant[]>(this.restaurantsUrl)
      .pipe(tap(_ => console.log(_)))
      .pipe(catchError(ErrorHandlerDefault.handleHttpErrorResponse))
  }

  /**
   * getRestaurantsById
   */
  public getRestaurantById(id:string): Observable<Restaurant>  {
    const _urlById = `${this.restaurantsUrl}/${id}`
    return this.http.get<Restaurant>(_urlById)
    .pipe(tap(_ => console.log(`id: ${id}`)))
    .pipe(catchError(ErrorHandlerDefault.handleHttpErrorResponse))
  }

  /**
   * getRestaurantReviews
   */
  public getRestaurantReviewsById(id:string): Observable<Reviews[]> {
    const _url = `${this.restaurantsUrl}/${id}/reviews`
    // TODO: simplificar
    let response:Observable<Reviews[]> = this.http.get<Reviews[]>(_url)
    return response
    .pipe(tap(_ => console.log(_)))
    .pipe(catchError(ErrorHandlerDefault.handleHttpErrorResponse))
  }

  /**
   * getMenuOfRestaurant
   */
  public getMenuOfRestaurant(id: string): Observable<MenuItem[]> {
    const _url = `${this.restaurantsUrl}/${id}/menu`
    return this.http.get<MenuItem[]>(_url)
    .pipe(tap(_ => console.log(_)))
    .pipe(catchError(ErrorHandlerDefault.handleHttpErrorResponse))        
  }
}
