import { Component, Input, OnInit } from '@angular/core';
import { RadioOption } from './radio-option.model';

@Component({
  selector: 'shared-validators-forms-radio-container',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  @Input() options!: RadioOption[]

  value:any

  constructor() { }

  ngOnInit() {
  }

  setValue(value:any){
    this.value = value
  } 

}
