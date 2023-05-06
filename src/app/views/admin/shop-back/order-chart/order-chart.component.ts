import { Component,ViewChild, OnInit,ElementRef } from '@angular/core';
import { Order } from 'src/app/views/shop/models/order';
import { OrderService } from 'src/app/views/shop/services/order.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/views/shop/services/cart.service';
@Component({
  selector: 'app-order-chart',
  templateUrl: './order-chart.component.html',
  styleUrls: ['./order-chart.component.css']
})
export class OrderChartComponent implements OnInit {

  orders: Order[];
  user!:any;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe((data: any[]) => {
      this.orders = data;
      for (let order of this.orders) {
        this.orderService.getUserByOrderId(order.idItem).subscribe (user=>this.user=user,error=>console.log(error));
      }

    });

  
  }



}