import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { Accessory } from '../models/accessory';
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import {IPaginationInstance} from "../models/pagination-instance.interface";
import { ShopService } from '../services/shop.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  accessories: Accessory[] = [];
  accessory!: Accessory;
  cart: Cart = new Cart(); // Créer une nouvelle instance de Cart avec idCart initialisé à 0
  pagination: IPaginationInstance = {
    id: 'custom',
    itemsPerPage: 6,
    currentPage: 1,
    totalItems: 0,
    totalPages: 0
  };
  totalItems = 0;

  sortField = 'name';
  sortDir = 'asc';
  currentPage = 1;

  page!: string | number;
  totalPages: number = 0;
  searchName!: string;
  searchPrice!: number;
  constructor(private accessoryService: ShopService, private router: Router, private cartService: CartService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    // console.log('Current cart:', this.cart);
    this.pagination.currentPage = 1;
    this.getAccessoriesList(1);

    this.cartService.GetCartById(this.cart.idCart).subscribe(data => {
      this.cart = data as Cart;
    });
  }
  getPage(pageNumber: number): void {
    const itemsPerPage = this.pagination.itemsPerPage;
    if (pageNumber < 1 || pageNumber > this.pagination.totalPages) {
      return;
    }

    this.accessoryService.getAccessories(pageNumber, itemsPerPage, this.sortField, this.sortDir).subscribe(
      data => {
        this.accessories = data.content;
        this.pagination.currentPage = pageNumber;
        this.totalItems = data.totalElements;
        this.pagination.totalPages = data.totalPages;
        this.page = pageNumber; // Update current page number
      },
      error => {
        console.log(error);
      }
    );
  }

  public addAccessoryToCart(idAccessory:number,accessory:Accessory)
  {
    const index = this.accessories.indexOf(accessory);
    console.log(index);

    this.cartService.addAccessoryToCart(accessory.idAccessory, this.cart.idCart)
      .subscribe(() => {
        this.cart.accessories.push(accessory);
        this.toastr.success('Accessory added to cart successfully!!', 'Notification!', {timeOut: 1000});
        this.router.navigate(['/Cart']);
      }, () => {
        this.toastr.error('Failed to add accessory to cart', 'Error!',{timeOut: 1000});
      });
  }

  public getAccessoriesList(pageNumber: number) {
      this.accessoryService.getAccessories(pageNumber, this.pagination.itemsPerPage, 'name', 'asc').subscribe(
        data => {
          this.accessories = data.content;
          this.pagination.currentPage = data.number + 1;
          this.pagination.totalItems = data.totalElements;
          this.pagination.totalPages = data.totalPages;
        },
        error => {
          console.log(error);
        }
      );
    }

  searchAccessories(): void {
    this.accessoryService.searchAccessories(this.searchName, this.searchPrice)
      .subscribe((accessories: Accessory[]) => {
        this.accessories = accessories;
      });
  }

}
