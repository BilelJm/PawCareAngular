import { Component, OnInit } from '@angular/core';
import { Accessory } from 'src/app/views/shop/models/accessory';
import { Router } from '@angular/router';
import {IPaginationInstance} from 'src/app/views/shop/models/pagination-instance.interface';
import { AccessoryService } from 'src/app/views/shop/services/accessory.service';
import {ToastrService} from "ngx-toastr";
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-list-accessories',
  templateUrl: './list-accessories.component.html',
  styleUrls: ['./list-accessories.component.css']
})
export class ListAccessoriesComponent implements OnInit {

  pagination: IPaginationInstance = {
    id: 'custom',
    itemsPerPage: 6,
    currentPage: 1,
    totalItems: 0,
    totalPages: 0
  };
  accessories:any;
  accessory:any;
  totalItems = 0;

  sortField = 'name';
  sortDir = 'asc';
  currentPage = 1;

  page!: string | number;
  totalPages: number = 0;
  searchName!: string;
  searchPrice!: number;


  constructor(private toastr:ToastrService,private AccessoryService:AccessoryService, private router :Router) {}
  public deleteAccessory(idAccessory:number){
    let resp= this.AccessoryService.deleteAccessory(idAccessory);
    resp.subscribe( () => {
        // Supprimer l'accessoire avec l'ID spécifié de la liste this.accessories
        this.accessories = this.accessories.filter((a:Accessory) => a.idAccessory !== idAccessory);
        this.toastr.success('Accessory deleted successfuly!','Notification!', {timeOut: 1000});

      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.pagination.currentPage = 1;
    this.getAccessoriesList(1);

  }
  getPage(pageNumber: number): void {
    const itemsPerPage = this.pagination.itemsPerPage;
    if (pageNumber < 1 || pageNumber > this.pagination.totalPages) {
      return;
    }

    this.AccessoryService.getAccessories(pageNumber, itemsPerPage, this.sortField, this.sortDir).subscribe(
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

  public getAccessoriesList(pageNumber: number) {
    this.AccessoryService.getAccessories(pageNumber, this.pagination.itemsPerPage, 'name', 'asc').subscribe(
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

  public updateAccessory(idAccessory: number) {

        this.router.navigate(['admin/updateAccessory', idAccessory]); 

      }

  searchAccessories(): void {
    this.AccessoryService.searchAccessories(this.searchName, this.searchPrice)
      .subscribe((accessories: Accessory[]) => {
        this.accessories = accessories;
      });
  }
  exportAccessoriesToCsv() {
    this.AccessoryService.exportAccessoriesToCsv().subscribe(data => {
      const blob = new Blob([data], { type: 'text/csv' });
      const fileName = 'accessories.csv';
      saveAs(blob, fileName);

    });
  }



}
