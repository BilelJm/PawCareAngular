import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Adoption } from '../../Adoption/adoption';
import { AdoptionService } from '../../Adoption/adoption.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createPopper } from '@popperjs/core';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-adoption-list',
  templateUrl: './adoption-list.component.html',
  styleUrls: ['./adoption-list.component.css']
})

export class AdoptionListComponent implements OnInit{

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor(private adoptionService: AdoptionService,private router: Router,private http: HttpClient
    ,private toastr: ToastrService){}
  adoptions: Adoption[];
  searchTerm: string;
  searchDate:'';
  imageURL: string;
  p: number = 1;
  currentPage: number = 1;

  getPictureUrl(adoption: Adoption): string {
    return `http://localhost:8080/adoption/adoption/${adoption.idAdoption}/picture`;
}

  ngOnInit(): void {
    this.getAdoptionList();
  }

  

  get filteredAdoptions(): Adoption[] {
    if (!this.adoptions) {
      return [];
    }
  
    if (!this.searchTerm && !this.searchDate) {
      return this.adoptions;
    } else if (this.searchTerm && this.searchDate) {
      return this.adoptions.filter(adoption =>
        (adoption.title && adoption.title.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
        (adoption.cDate.toString().substring(0, 10) === this.searchDate)
      );
    } else if (this.searchDate) {
      return this.adoptions.filter(adoption =>
        (adoption.cDate.toString().substring(0, 10) === this.searchDate)
      );
    } else {
      return this.adoptions.filter(adoption =>
        (adoption.title && adoption.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
    }
  }

  private getAdoptionList(){
    this.adoptionService.getAdoptionList().subscribe(data => {
      this.adoptions = data.sort((a, b) => b.idAdoption - a.idAdoption);
    });
  }

  
  updateAdoption(idAdoption: number){
    this.router.navigate(['/admin/update-Adoption', idAdoption]);
  }



  createAdoption(){
    this.router.navigate(['/admin/create-Adoption']);
  }
  
  deleteAdoption(idAdoption: number) {
    this.adoptionService.deleteAdoption(idAdoption).subscribe(
      response => {
        console.log(response);
        this.toastr.success('Adoption deleted successfully.', 'Success');

       // alert('Adoption deleted successfully');
        // filter out the deleted adoption from the adoption list
        this.adoptions = this.adoptions.filter(a => a.idAdoption !== idAdoption);
        this.getAdoptionList();

      },
      error => {
        this.toastr.error('error in deleting adoption','error')
        console.log(error);
        alert('Error deleting adoption');
      }
    );
    window.location.reload();
    
  }
  


  
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef: ElementRef;
  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }
  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }

  
  
    
}
