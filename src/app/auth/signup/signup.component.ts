import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  form: FormGroup = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/i),
        ],
        [this.uniqueUsername.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    {
      validators: [this.matchPassword.validate],
    }
  );

  constructor(
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService
  ) {}

  onSubmit() {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach((field) =>
        this.form.get(field)?.markAsDirty()
      );
      return;
    }

    this.authService.signup(this.form.value).subscribe({
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
