import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  usernameAvaliable(username: string) {
    return this.httpClient.post<any>(
      'https://api.angular-email.com/auth/username',
      {
        username,
      }
    );
  }
}
