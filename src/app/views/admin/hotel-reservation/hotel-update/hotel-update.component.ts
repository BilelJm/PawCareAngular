import { Component, OnInit, Input } from '@angular/core';
import { Hotels } from '../hotels';
import { HotelService } from '../services/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-hotel-update',
  templateUrl: './hotel-update.component.html',
  styleUrls: ['./hotel-update.component.css']
})
export class HotelUpdateComponent implements OnInit {
  hotels: Hotels = new Hotels();
  id!: number;


  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor(private hotelservice: HotelService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    

    this.hotelservice.getHotelById(this.id).subscribe(data => {
      this.hotels = data;
    });
  }
  onSubmit(){
    
    this.updateHotel();
    this.gotoHotellist();

    
  }

  updateHotel(){
    this.hotelservice.updateHotel(this.id,this.hotels).subscribe(data =>{
      console.log(this.hotels);
      console.log(data);
      }),
      error => console.log(error);
  }

  gotoHotellist(){
    this.router.navigate(['/admin/hotel-res']);
  }
  

}
