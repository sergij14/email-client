import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from './email';

interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private httpClient: HttpClient) {}

  rootURL = 'https://api.angular-email.com';

  getEmails() {
    return this.httpClient.get<EmailSummary[]>(`${this.rootURL}/emails`, {
      withCredentials: true,
    });
  }

  getEmail(id: string) {
    return this.httpClient.get<Email>(`${this.rootURL}/emails/${id}`, {
      withCredentials: true,
    });
  }

  sendEmail(email: Email) {
    return this.httpClient.post<Email>(`${this.rootURL}/emails/`, email, {
      withCredentials: true,
    });
  }
}
