import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private httpClient: HttpClient) {}

  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    console.log(control.value);

    return new Observable();
  }
}
