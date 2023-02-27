import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Email } from '../email';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent {
  modalVisible = false;
  email!: Email;

  constructor(private authService: AuthService) {
    this.email = {
      id: '',
      to: '',
      from: `${authService.username}@angular-email.com`,
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
