import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterFormRoutingModule } from './register-form-routing.module';
import { RegisterFormComponent } from './register-form.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    RegisterFormRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [RegisterFormComponent]
})
export class RegisterFormModule { }
