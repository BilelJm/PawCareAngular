import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import { PaymentService } from '../services/payment.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  orderId!: number;
  userId!: number;
  cardNumber!: string;
  expMonth!: string;
  expYear!: string;
  cvc!: string;
  order!:any;
  paymentStatus!:String;
  paymentForm!: FormGroup;
  paymentResult!: string;
  constructor(private route: ActivatedRoute, private router: Router, private stripeService: PaymentService,private toastr:ToastrService) { }

  ngOnInit(): void {
    // Get the order ID and user ID from the route params
    this.orderId = this.route.snapshot.params['orderId'];
    this.userId = this.route.snapshot.params['userId'];

    }

  payOrder(): void {
    const userId = 1;
    this.stripeService.payOrder(this.orderId, userId, this.cardNumber, this.expMonth, this.expYear, this.cvc)
      .subscribe(
        successMessage => {
          this.toastr.success('Payment done successfully!');
          console.log(successMessage);
          // Redirect to a success page
          this.router.navigate(['/order-details'], { queryParams: { orderId: this.orderId } });

        },
        error => {
          this.toastr.error('Error proceeding payment !');
          console.error(error);
          // Show an error message
        }
      );
  }

}
