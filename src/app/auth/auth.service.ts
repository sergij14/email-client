import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { BehaviorSubject, tap } from 'rxjs';

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
  signedin$ = new BehaviorSubject(false);

  usernameAvaliable(username: string) {
    return this.httpClient.post<UsernameAvailableResponse>(
      `${this.rootURL}/auth/username`,
      {
        username,
      }
    );
  }

  signup(credentials: SignupCredentials) {
    return this.httpClient
      .post<SignupResponse>(`${this.rootURL}/auth/signup`, credentials)
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }
}
