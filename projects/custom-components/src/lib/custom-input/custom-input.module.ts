import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomButtonModule } from '../custom-button';
import { CustomInputComponent } from './custom-input.component';

@NgModule({
  declarations: [CustomInputComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CustomButtonModule
  ],
  exports: [CustomInputComponent]
})
export class CustomInputModule { }
