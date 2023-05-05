import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { CartService } from '../services/cart.service';
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

 
  orderDetails!: any;
  accessories!: any[];
  user!:any;
  constructor(private toastr:ToastrService,private route:ActivatedRoute,private orderService:OrderService,private cartService:CartService
  ) {
  }
  ngOnInit() {
    const orderId = this.route.snapshot.queryParams['orderId'];
    this.orderService.getItemById(orderId).subscribe(orderDetails => {
      this.orderDetails = orderDetails;
      console.log('orderDetails:', orderDetails);

      this.orderService.getAccessoriesByOrderId(orderId).subscribe(
        accessories => {
          this.accessories = accessories;
        },
        error => {
          console.error(error);
        }
      );
    });

    this.orderService.getUserByOrderId(orderId).subscribe(
      user => this.user = user,
      error => console.log(error)
    );

  }

  downloadBill() {
    const orderId = this.route.snapshot.queryParams['orderId'];
    this.orderService.downloadBillPdf(orderId).subscribe(pdf => {
      const blob = new Blob([pdf], {type: 'application/pdf'});
      const url = window.URL.createObjectURL(blob);
      window.open(url);
      this.toastr.success('Bill.pdf saved successfully!');

    });
  }
  

}
