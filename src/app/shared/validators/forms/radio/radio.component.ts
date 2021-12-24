import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { RadioOption } from './radio-option.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'shared-validators-forms-radio-container',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(()=>RadioComponent), 
      multi:true }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options!: RadioOption[]

  value:any
  onChange: any;
  onTouched: any;
  

  constructor() { }

  // chamado pelas diretivas quando necessário passar valores para o componente
  writeValue(obj: any): void {
    this.value = obj
  }

  // chamado pelas diretivas quando o valor interno do componente mudar
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  ngOnInit() {
  }

  setValue(value:any){
    this.value = value
    this.onChange(this.value)
  } 

}
