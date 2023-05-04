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

}
