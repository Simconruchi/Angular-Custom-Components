import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './custom-input.component';



@NgModule({
  declarations: [CustomInputComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CustomInputComponent]
})
export class CustomInputModule { }
