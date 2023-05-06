import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HotelService } from '../../admin/hotel-reservation/services/hotel.service';
import { Hotels } from '../../admin/hotel-reservation/hotels';
import AOS from 'aos';
import './aos.css';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hotelhome',
  templateUrl: './hotelhome.component.html',
  styleUrls: ['./hotelhome.component.css','./bootstrap.css','./aos.css','./owl.carousel.min.css','./animate.css']
})
export class HotelhomeComponent implements OnInit,AfterViewInit {
  hotelee:Hotels[];

  constructor(private hotelservice: HotelService,private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
    this.gethotels();
  }
  ngAfterViewInit() {
    AOS.init();
  }
  
  private gethotels(){
    this.hotelservice.getHotellist().subscribe(data => {this.hotelee=data;});
    
  }
  hotelDetail(id: number){
    this.router.navigate(['/hotels/detail',id]);
  }

}
