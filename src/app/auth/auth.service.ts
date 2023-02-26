import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

type UsernameAvailableResponse =
  | {
      available: boolean;
    }
  | ValidationErrors;

interface SignupCredentials {
  username: string;
}

interface SignupResponse {
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  rootURL = 'https://api.angular-email.com';

  usernameAvaliable(username: string) {
    return this.httpClient.post<UsernameAvailableResponse>(
      `${this.rootURL}/auth/username`,
      {
        username,
      }
    );
  }

  signup(credentials: SignupCredentials) {
    return this.httpClient.post<SignupResponse>(
      `${this.rootURL}/auth/signup`,
      credentials
    );
  }
}
