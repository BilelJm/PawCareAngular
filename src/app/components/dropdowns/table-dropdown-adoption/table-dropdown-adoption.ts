import { Component, AfterViewInit, ViewChild, ElementRef, Input } from "@angular/core";
import { Router } from "@angular/router";
import { createPopper } from "@popperjs/core";
import { Adoption } from "src/app/views/adop front/Adoption/adoption";
import { AdoptionService } from "src/app/views/adop front/Adoption/adoption.service";


@Component({
  selector: "app-table-dropdown-adoption",
  templateUrl: "./table-dropdown-adoption.component.html",
})
export class TableDropdownAdoptionComponent implements AfterViewInit {

    constructor(private adoptionService: AdoptionService,private router: Router){}


  adoptions: Adoption[];
  searchTerm: string;
  searchDate:'';
  imageURL: string;

  @Input() adoption: Adoption;


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




  updateAdoption(idAdoption: number){
    this.router.navigate(['/admin/update-Adoption', idAdoption]);
  }



   getAdoptionList(){
    this.adoptionService.getAdoptionList().subscribe(data => {
      this.adoptions = data.sort((a, b) => b.idAdoption - a.idAdoption);
    });
  }

  deleteAdoption(idAdoption: number){
    this.adoptionService.deleteAdoption(idAdoption).subscribe( data => {
      console.log(data);
      this.getAdoptionList();
    })
  }



   }
