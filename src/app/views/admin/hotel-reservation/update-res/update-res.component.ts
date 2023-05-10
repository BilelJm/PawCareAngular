import { Component, OnInit, Input } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-update-res',
  templateUrl: './update-res.component.html',
  styleUrls: ['./update-res.component.css']
})
export class UpdateResComponent implements OnInit {
  reservation: Reservation = new Reservation();
  id!: number;

  constructor(private resservice: ReservationService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    

    this.resservice.getReservationById(this.id).subscribe(data => {
      this.reservation = data;
    console.log(data)});

    this.CheckoutControle();
    this.dateControle();
  }

  onSubmit(){
    
    this.updateReservation();
    this.gotoReservationlist();

    
  }
  updateReservation(){
    this.resservice.updateReservation(this.id,this.reservation).subscribe(data =>{
      console.log(this.reservation);
      console.log(data);
      }),
      error => console.log(error);
  }

  gotoReservationlist(){
    this.router.navigate(['/admin/res-list']);
  }

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

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
    });}

    dateControle(){
      const dateInput = document.getElementById('checkin');
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const minDate = tomorrow.toISOString().slice(0, 10);
      dateInput.setAttribute('min', minDate);
      }

}
