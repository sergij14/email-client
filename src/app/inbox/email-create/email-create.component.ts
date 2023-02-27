import { Component } from '@angular/core';
import { Email } from '../email';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent {
  modalVisible = false;
  email!: Email;

  constructor() {
    this.email = {
      id: '',
      to: '',
      from: '',
      html: '',
      text: '',
      subject: '',
    };
  }

  showModal() {
    this.modalVisible = true;
  }

  hideModal() {
    this.modalVisible = false;
  }
}
