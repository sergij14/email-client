import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit {
  @Input() email!: Email | null;
  @Output() emailSubmit = new EventEmitter();
  form!: FormGroup;

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    this.form = new FormGroup({
      to: new FormControl(this.email?.to, [Validators.required, Validators.email]),
      from: new FormControl({ value: this.email?.from, disabled: true }),
      subject: new FormControl(this.email?.subject, [Validators.required]),
      text: new FormControl(this.email?.text, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach((field) =>
        this.form.get(field)?.markAsDirty()
      );
      return;
    }

    this.emailSubmit.emit(this.form.getRawValue());
  }
}
