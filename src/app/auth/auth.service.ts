import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { BehaviorSubject, map, tap } from 'rxjs';

type UsernameAvailableResponse =
  | {
      available: boolean;
    }
  | ValidationErrors;

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SigninCredentials {
  username: string;
  password: string;
}

interface SignupResponse {
  username: string;
}

interface SignedinResponse {
  authenticated: boolean;
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
      .post<SignupResponse>(`${this.rootURL}/auth/signup`, credentials, {
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }

  checkAuthState() {
    return this.httpClient
      .get<SignedinResponse>(`${this.rootURL}/auth/signedin`, {
        withCredentials: true,
      })
      .pipe(
        map(({ authenticated, username }) => {
          this.signedin$.next(authenticated);
        })
      );
  }

  signout() {
    return this.httpClient
      .post<SignupResponse>(
        `${this.rootURL}/auth/signout`,
        {},
        {
          withCredentials: true,
        }
      )
      .pipe(
        tap(() => {
          this.signedin$.next(false);
        })
      );
  }

  signin(credentials: SigninCredentials) {
    console.log(credentials);

    return this.httpClient
      .post(`${this.rootURL}/auth/signin`, credentials, {
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }
}
