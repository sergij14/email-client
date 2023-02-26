import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/i),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach((field) =>
        this.form.get(field)?.markAsDirty()
      );
      return;
    }

    this.authService.signin(this.form.value).subscribe({
      next: (res) => {
        //navigate to route
      },
      error: (err) => {
        if (!err.status) {
          this.form.setErrors({ noConnection: true });
        }
      },
    });
  }
}
