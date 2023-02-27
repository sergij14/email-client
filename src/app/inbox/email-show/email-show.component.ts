import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  email!: Email | null;
  replyEmail!: Email | null;

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap(({ id }) => {
          return this.emailService.getEmail(id);
        })
      )
      .subscribe((email) => {
        this.email = email;

        const text = this.email.text.replace(/\n/gi, '\n> ');
        this.replyEmail = {
          ...this.email,
          to: this.email?.from || '',
          from: this.email?.to || '',
          subject: `RE: ${this.email?.subject}` || '',
          text: `\n ------- ${this.email.from} wrote: \n > ${text}`,
        };
      });
  }
}
