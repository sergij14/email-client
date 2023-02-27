import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [InputComponent, NavbarComponent, ModalComponent],
  imports: [CommonModule, ReactiveFormsModule, AppRoutingModule],
  exports: [InputComponent, NavbarComponent, ModalComponent],
})
export class SharedModule {}
