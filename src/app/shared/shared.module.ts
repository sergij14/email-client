import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [InputComponent, NavbarComponent],
  imports: [CommonModule, ReactiveFormsModule, AppRoutingModule],
  exports: [InputComponent, NavbarComponent],
})
export class SharedModule {}
