import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

type UsernameAvailableResponse =
  | {
      available: boolean;
    }
  | ValidationErrors;

interface SignupResponse {
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  usernameAvaliable(username: string) {
    return this.httpClient.post<UsernameAvailableResponse>(
      'https://api.angular-email.com/auth/username',
      {
        username,
      }
    );
  }

  signup(credentials: any) {
    return this.httpClient.post<SignupResponse>(
      'https://api.angular-email.com/auth/signup',
      credentials
    );
  }
}
