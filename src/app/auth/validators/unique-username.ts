import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    const { value } = control;

    return this.authService.usernameAvaliable(value).pipe(
      map((value) => {
        return value.available && null;
      }),
      catchError((err) => {
        if (err.error.username) {
          return of({
            nonUniqueUsername: true,
          });
        }
        return of({
          noConnection: true,
        });
      })
    );
  };
}
