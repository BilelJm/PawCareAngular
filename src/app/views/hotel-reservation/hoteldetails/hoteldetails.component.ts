import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../../admin/hotel-reservation/services/hotel.service';
import { Hotels } from '../../admin/hotel-reservation/hotels';

@Component({
  selector: 'app-hoteldetails',
  templateUrl: './hoteldetails.component.html',
  styleUrls: ['./hoteldetails.component.css','./bootstrap.css','./aos.css','./owl.carousel.min.css','./animate.css']
})
export class HoteldetailsComponent implements OnInit {
  hotels: Hotels = new Hotels();
  id!: number;

  constructor(private route: ActivatedRoute,
    private router: Router, private hotelservice: HotelService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.hotelservice.getHotelById(this.id).subscribe(data => {
      console.log(data);
      this.hotels = data;
    });
  }

  Reserver(){
    this.router.navigate(['reservations']);
  }

  

}
