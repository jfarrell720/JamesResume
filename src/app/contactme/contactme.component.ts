import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  imports: [FormsModule],
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent {
  // Define properties to bind to the form
  userName: string = '';
  userEmail: string = '';
  message: string = '';

  // Function to send the email
  public sendEmail(e: Event) {
    e.preventDefault();

    // Prepare the template parameters to match the template variable names
    const templateParams = {
      from_name: this.userName,  // from_name should be the sender's name
      from_email: this.userEmail, // Optionally send the user's email
      message: this.message       // The message content
    };

    // Send the email using emailjs
    emailjs
      .send('service_4uogd5r', 'template_ecnoiey', templateParams, 'aZH5_9HUvSDxayVvW')
      .then(
        () => {
          alert('Success! Your message has been sent.');
          console.log('SUCCESS!');
          this.userName  = '';
          this.userEmail = '';
          this.message = '';
        },
        (error) => {
          alert('Failed to send the message. Please try again later, or email me directly jamesfarrell720@gmail.com');
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
  }
}
