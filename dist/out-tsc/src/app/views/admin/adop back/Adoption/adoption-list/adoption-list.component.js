import { __decorate } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { createPopper } from '@popperjs/core';
let AdoptionListComponent = class AdoptionListComponent {
    constructor(adoptionService, router, http, toastr) {
        this.adoptionService = adoptionService;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this._color = "light";
        this.p = 1;
        this.currentPage = 1;
        this.dropdownPopoverShow = false;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    getPictureUrl(adoption) {
        return `http://localhost:8080/adoption/adoption/${adoption.idAdoption}/picture`;
    }
    ngOnInit() {
        this.getAdoptionList();
    }
    get filteredAdoptions() {
        if (!this.adoptions) {
            return [];
        }
        if (!this.searchTerm && !this.searchDate) {
            return this.adoptions;
        }
        else if (this.searchTerm && this.searchDate) {
            return this.adoptions.filter(adoption => (adoption.title && adoption.title.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
                (adoption.cDate.toString().substring(0, 10) === this.searchDate));
        }
        else if (this.searchDate) {
            return this.adoptions.filter(adoption => (adoption.cDate.toString().substring(0, 10) === this.searchDate));
        }
        else {
            return this.adoptions.filter(adoption => (adoption.title && adoption.title.toLowerCase().includes(this.searchTerm.toLowerCase())));
        }
    }
    getAdoptionList() {
        this.adoptionService.getAdoptionList().subscribe(data => {
            this.adoptions = data.sort((a, b) => b.idAdoption - a.idAdoption);
        });
    }
    updateAdoption(idAdoption) {
        this.router.navigate(['/admin/update-Adoption', idAdoption]);
    }
    createAdoption() {
        this.router.navigate(['/admin/create-Adoption']);
    }
    deleteAdoption(idAdoption) {
        this.adoptionService.deleteAdoption(idAdoption).subscribe(response => {
            console.log(response);
            this.toastr.success('Adoption deleted successfully.', 'Success');
            // alert('Adoption deleted successfully');
            // filter out the deleted adoption from the adoption list
            this.adoptions = this.adoptions.filter(a => a.idAdoption !== idAdoption);
            this.getAdoptionList();
        }, error => {
            this.toastr.error('error in deleting adoption', 'error');
            console.log(error);
            alert('Error deleting adoption');
        });
    }
    ngAfterViewInit() {
        createPopper(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
        }
    }
};
__decorate([
    Input()
], AdoptionListComponent.prototype, "color", null);
__decorate([
    ViewChild("btnDropdownRef", { static: false })
], AdoptionListComponent.prototype, "btnDropdownRef", void 0);
__decorate([
    ViewChild("popoverDropdownRef", { static: false })
], AdoptionListComponent.prototype, "popoverDropdownRef", void 0);
AdoptionListComponent = __decorate([
    Component({
        selector: 'app-adoption-list',
        templateUrl: './adoption-list.component.html',
        styleUrls: ['./adoption-list.component.css']
    })
], AdoptionListComponent);
export { AdoptionListComponent };
//# sourceMappingURL=adoption-list.component.js.map