import { Restaurant } from './restaurant/restaurant.model';
import { MEAT_API } from '../app.api';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
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
      .pipe(tap(_ => console.log(_)
      ))
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

}
