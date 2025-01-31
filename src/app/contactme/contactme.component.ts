import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule here

@Component({
  selector: 'app-contactme',
  imports: [FormsModule],
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent {
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_4uogd5r', 'template_ecnoiey', e.target as HTMLFormElement, {
        publicKey: 'aZH5_9HUvSDxayVvW',
      })
      .then(
        () => {
          alert('Success! Your message has been sent.');
          console.log('SUCCESS!');
        },
        (error) => {
          alert('Failed to send the message. Please try again later.');
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
