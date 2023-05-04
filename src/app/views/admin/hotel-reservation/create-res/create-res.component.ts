import { Component, OnInit, Input } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../reservation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-res',
  templateUrl: './create-res.component.html',
  styleUrls: ['./create-res.component.css']
})
export class CreateResComponent implements OnInit {

  constructor(private reservationservice: ReservationService, private router: Router) { }
  reservation: Reservation = new Reservation();

  ngOnInit(): void {
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
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
}
