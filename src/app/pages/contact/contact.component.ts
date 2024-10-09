import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('/api/contact', this.contactForm).subscribe(
      response => {
        console.log('Message sent successfully', response);
      },
      error => {
        console.error('Error sending message', error);
      }
    );
  }
}
