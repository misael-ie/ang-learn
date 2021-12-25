import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './analytics/user-experience/rating/rating.component';
import { InputComponent } from './validators/forms/input/input.component';
import { RadioComponent } from './validators/forms/radio/radio.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        InputComponent,
        RadioComponent,
        RatingComponent
    ],
    declarations: [
        InputComponent,
        RadioComponent,
        RatingComponent
    ],
    providers: [],
})
export class SharedModule { }
