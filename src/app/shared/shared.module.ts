import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ModalComponent } from './modal/modal.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { InboxRoutingModule } from '../inbox/inbox-routing.module';

@NgModule({
  declarations: [InputComponent, NavbarComponent, ModalComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule, InboxRoutingModule],
  exports: [InputComponent, NavbarComponent, ModalComponent],
})
export class SharedModule {}
