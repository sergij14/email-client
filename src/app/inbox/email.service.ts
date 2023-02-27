import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) {}

  rootURL = 'https://api.angular-email.com';

  getEmails() {
    return this.httpClient.get<EmailSummary[]>(`${this.rootURL}/emails`, {
      withCredentials: true,
    });
  }
}
