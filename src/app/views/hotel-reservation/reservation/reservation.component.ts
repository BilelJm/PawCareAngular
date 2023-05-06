import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../admin/hotel-reservation/services/reservation.service';
import { Router } from '@angular/router';
import { Reservation } from '../../admin/hotel-reservation/reservation';
import { MailDetails } from '../../admin/hotel-reservation/details';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css','./res.min.css','./resstyle.css']
})
export class ReservationComponent implements OnInit {

  constructor(private reservationservice: ReservationService, private router: Router) { }
  reservation: Reservation = new Reservation();
  detail: MailDetails = new MailDetails();
  mail:string;

  ngOnInit(): void {
    this.dateControle();
    this.CheckoutControle();
  }

  onSubmit(){
    console.log(this.reservation);
    this.saveReservation();
    
  }
  sendMail(){
    this.reservationservice.sendemail(this.detail);
  }

  saveReservation(){
    this.reservationservice.createReservationtoo(this.reservation,this.mail).subscribe( data =>{
      console.log(this.reservation);
      console.log(this.mail)
      console.log(data);
      this.gotohotels();
      
    }),
    error => console.log(error);

  }

  dateControle(){
    const dateInput = document.getElementById('checkin');
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().slice(0, 10);
    dateInput.setAttribute('min', minDate);
  }
    CheckoutControle(){
    const checkIn  = document.getElementById('checkin');
    const checkOut  = document.getElementById('checkout');
      checkIn.addEventListener('change', () => {
      const inputElement = event.target as HTMLInputElement;
      const selectedDate = new Date(inputElement.value);
      
      // Add one day to selected date
      selectedDate.setDate(selectedDate.getDate() + 1);
      // Format date as yyyy-mm-dd string
      const maxDate = selectedDate.toISOString().slice(0, 10);
      // Set max attribute of check-out input
      checkOut.setAttribute('min', maxDate);
    });
  }

  gotohotels(){
    this.router.navigate(['/hotels']);
  }
}
