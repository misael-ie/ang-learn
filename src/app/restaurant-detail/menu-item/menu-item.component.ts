import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'restaurant-detail-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({
        opacity: 1
      })),
      transition("void => ready", [
        style({
          opacity: 0,
          transform: 'translate(0px, 15px)'
        }),
        animate('500ms 0s ease-in')
      ])
    ])
  ]  
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem!: MenuItem
  @Output() add = new EventEmitter()
  menuItemState = "ready"

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.menuItem)
  }



}
