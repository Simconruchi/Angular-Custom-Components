import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomOtpComponent } from './custom-otp.component';

@NgModule({
  declarations: [CustomOtpComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [CustomOtpComponent]
})
export class CustomOtpModule { }
