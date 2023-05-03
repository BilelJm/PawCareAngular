import { Component, OnInit, Input } from '@angular/core';
import { Hotels } from '../../hotels';
import { HotelService } from '../../services/hotel.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {

  hotels: Hotels = new Hotels();
  f :any;

  constructor(private hotelservice: HotelService, private router: Router) { }

  ngOnInit(): void {
  }

  saveHotel(){
    const image = this.f;

    this.hotelservice.createHotel(this.hotels,image).subscribe( data =>{
      console.log(this.hotels);
      console.log(data);
      this.gotoHotellist();
    }),
    error => console.log(error);

  }
  selectedFile: File;

*

  gotoHotellist(){
    this.router.navigate(['/admin/hotel-res']);
  }
  onFileSelected(event:any) {
    if (event.target.files.length > 0) {
      this.f = event.target.files[0];
      
      console.log(this.f);
    }
  }

  onSubmit(){
    console.log(this.hotels);
    
    this.saveHotel();
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
