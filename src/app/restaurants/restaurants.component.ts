import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'zero-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  // This is just for dev
  // might be replace by data from backend

  restaurants: Restaurant[] = [
    {
      id: "bread-bakery",
      name: "Bread & Bakery",
      category: "Bakery",
      deliveryEstimate: "25m",
      rating: 4.9,
      imagePath: "assets/img/restaurants/breadbakery.png",
      about: "A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.",
      hours: "Funciona de segunda à sexta, de 8h às 23h"
    },
    {
      id: "burger-house",
      name: "Burger House",
      category: "Hamburgers",
      deliveryEstimate: "100m",
      rating: 3.5,
      imagePath: "assets/img/restaurants/burgerhouse.png",
      about: "40 anos se especializando em trash food.",
      hours: "Funciona todos os dias, de 10h às 22h"
    },
    {
      id: "green-food",
      name: "Green Food",
      category: "Saudável",
      deliveryEstimate: "75m",
      rating: 4.6,
      imagePath: "assets/img/restaurants/greenfood.png",
      about: "Comida saudável é no Green Food. Compramos barato, vendemos caro. ;)",
      hours: "Somente em horário de almoço, das 11h às 15h"
    }  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
