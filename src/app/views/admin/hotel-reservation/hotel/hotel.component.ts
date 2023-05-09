import { Component, OnInit ,Input} from '@angular/core';
import { Hotels } from '../hotels';
import { HotelService } from '../services/hotel.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotelee:Hotels[];
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  constructor(private hotelservice : HotelService,private router: Router) { }

  ngOnInit(): void {
    this.gethotels();
  }

  private gethotels(){
    this.hotelservice.getHotellist().subscribe(data => {this.hotelee=data;});
    
  }
  deleteHotel(id: number){
    this.hotelservice.deleteHotel(id).subscribe( data => {
      console.log(data);
      this.gethotels();
    },
    error => console.log(error));
  
  }
  updateHotel(id: number){
    this.router.navigate(['/admin/hotel-update', id]);
  }
  


 
 

  

}
