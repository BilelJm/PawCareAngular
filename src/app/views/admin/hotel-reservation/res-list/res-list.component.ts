import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../reservation';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-res-list',
  templateUrl: './res-list.component.html',
  styleUrls: ['./res-list.component.css']
})
export class ResListComponent implements OnInit {

  reservations: Reservation[];

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  constructor(private router: Router, private resservice: ReservationService) { }

  ngOnInit(): void {
    this.getreservation();
  }
  private getreservation(){
    this.resservice.getHotellist().subscribe(data => {this.reservations=data;});
    
  }

}
