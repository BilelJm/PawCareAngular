import { Component, OnInit, Input } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Router } from '@angular/router';
import { Reservation } from '../reservation';


@Component({
  selector: 'app-res-create',
  templateUrl: './res-create.component.html',
  styleUrls: ['./res-create.component.css']
})
export class ResCreateComponent implements OnInit {

  constructor(private reservationservice: ReservationService, private router: Router) { }
  reservation: Reservation = new Reservation();

  ngOnInit(): void {
    this.dateControle();
    this.CheckoutControle();
    
  }
  onSubmit(){
    console.log(this.reservation);
    this.saveReservation();
    
  }
  saveReservation(){
    this.reservationservice.createReservation(this.reservation).subscribe( data =>{
      console.log(this.reservation);
      console.log(data);
      this.gotoReservation();
    }),
    error => console.log(error);

  }
  gotoReservation(){
    this.router.navigate(['/admin/res-list']);
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
 /* const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate( + 2);
  const minDate = tomorrow.toISOString().slice(0, 10);
  checkIn.setAttribute('min', minDate);*/

  
  }
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

}
