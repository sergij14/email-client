import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css'],
})
export class EmailReplyComponent {
  modalVisible = false;
  email!: Email;

  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {
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

  onEmailSubmit(email: Email) {}
}
