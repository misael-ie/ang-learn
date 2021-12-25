import { NgModel } from '@angular/forms';
import { FormControlName } from '@angular/forms';
import { 
  Component, 
  OnInit, 
  Input,
  ContentChild,
  AfterContentInit, // TODO: AfterContentInit: add to review component
 } from '@angular/core';


@Component({
  selector: 'shared-validators-forms-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {
  @Input() label:string = ""
  @Input() successMessage:string = ""
  @Input() errorMessage:string = ""
  input:any

  @ContentChild(NgModel) model!: NgModel
  @ContentChild(FormControlName) control!: FormControlName

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
      this.input = this.model || this.control // REVIEW: Seleciona um objeto ou outro (começando da direita para a esquerda)

      if (this.input === undefined) {
        throw new Error("Necessário diretiva ngModel ou FormControlName");
               
      }
  }

  hasSuccess():boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError():boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
