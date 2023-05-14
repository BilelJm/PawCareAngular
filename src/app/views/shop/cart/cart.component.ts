import { Component, OnInit } from '@angular/core';
import { Accessory } from '../models/accessory';
import { Cart } from '../models/cart';
import { Order } from '../models/order';
import { User } from '../models/user';
import { CartService } from '../services/cart.service';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
//import { StorageService } from 'src/app/views/auth/_services/storage.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public AccessoriesInCart: Accessory[] = [];
  cart!:Cart;
  totalPrice=0;
  order: Order = new Order();
  user!: User;

  constructor(private cartService: CartService,private toastr : ToastrService,private router:Router){}  //private storageService:StorageService,

  ngOnInit():void {

     this.cart = new Cart();
     this.cartService.GetCartById(this.cart.idCart).subscribe(
      (cart:Cart) => {
        this.cart = cart;
        this.AccessoriesInCart = this.cart.accessories;
        console.log('Contenu du panier :', this.cart.accessories);
        this.totalPrice = this.calculateTotalPrice(this.AccessoriesInCart);

      },
      error => {
        console.log('Error getting cart:', error);
      }
    );
    this.user = new User();
    console.log('id user :', this.user.id);


  }
  calculateTotalPrice(accessories: Accessory[]): number {
    let totalPrice = 0;
    for (const accessory of accessories) {
      totalPrice += accessory.price;
    }
    return totalPrice;
  }

  removeAccessoryFromCart(idAccessory:number,accessory:Accessory)
  {
    const index = this.AccessoriesInCart.indexOf(accessory);
    console.log(index);
    this.cartService.removeAccessoryFromCart(accessory.idAccessory, this.cart.idCart).subscribe(() => {
      this.AccessoriesInCart.splice(index, 1);
      this.toastr.success('Accessory removed from cart successfully!!', 'Notification!', {timeOut: 1000});
      this.cartService.GetCartById(this.cart.idCart).subscribe((cart:Cart) => {
        this.cart = cart;
        this.totalPrice = this.calculateTotalPrice(this.cart.accessories);
      });
    }, error => {
      this.toastr.error('Failed to remove accessory from cart', 'Error!',{timeOut: 1000});
    });
  }

  emptyCart() {
    this.cartService.emptyCart(this.cart.idCart).subscribe(() => {
      this.cartService.GetCartById(this.cart.idCart).subscribe((cart: Cart) => {
        this.cart = cart;
        this.AccessoriesInCart = this.cart.accessories;
        this.totalPrice = this.calculateTotalPrice(this.AccessoriesInCart);
        this.toastr.success('Cart has been emptied!', 'Success', { timeOut: 1000 });
      });
    }, (error) => {
      this.toastr.error('Failed to empty cart', 'Error', { timeOut: 1000 });
    });
  }

  confirmOrder() {
    const order = new Order();
    order.user = this.user;
    console.log('idUser' + (this.user ? this.user.id : ' user undefined')) //

    order.cart = this.cart;
    this.cartService.createOrderFromCart(this.cart.idCart, this.user.id).subscribe( //this.storageService.getUser().id

      response => {
        this.toastr.success('Order created successfully');
        console.log(response);

        // Navigate to the payment page with the order ID in the URL
        this.router.navigate(['/payment', response.idItem]);
      },
      error => {
        this.toastr.error('Error creating order');
        console.log(error);
      }
    );
  }


}
