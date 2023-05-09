import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent {

  details = {
    senderEmail: '',
    recipient: '',
    subject: '',
    msgBody: ''
  };

result: string;

  
constructor(private http: HttpClient) { }



sendEmail() {
  const url = 'http://localhost:8080/email/send-email';
  const body = this.details;

  this.http.post(url, body).subscribe(
    res => {
      console.log(res);
      
    },
    err => {
      console.log(err);
      
    }
  );
}
}

