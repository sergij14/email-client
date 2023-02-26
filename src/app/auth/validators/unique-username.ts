import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private httpClient: HttpClient) {}

  validate = (
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    const { value } = control;

    return this.httpClient
      .post<any>('https://api.angular-email.com/auth/username', {
        username: value,
      })
      .pipe(
        map((value) => {
          return value.available && null;
        }),
        catchError((err) => {
          return of({
            nonUniqueUsername: true,
          });
        })
      );
  };
}
