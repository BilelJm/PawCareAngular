import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Pet } from '../pet';
let PetListComponent = class PetListComponent {
    constructor(petService, router, http, toastr) {
        this.petService = petService;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.pet = new Pet();
        this.pets = [];
        this.p = 1;
        this.currentPage = 1;
        this.name = '';
        this._color = "light";
        this.key = 'idPet';
        this.reverse = false;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    ngOnInit() {
        this.getPets();
    }
    getPets() {
        this.petService.getPetsList().subscribe(data => {
            console.log(data); // Add this line
            this.pets = data;
        });
    }
    updatePet(id) {
        this.router.navigate(['/admin/update-pet', id]);
    }
    deletePet(id) {
        this.petService.deletePet(id).subscribe(data => {
            console.log(data);
            this.toastr.success('Pet deleted successfully.', 'Success');
            this.getPets();
        }, error => {
            this.toastr.error('An Error Has occured.', 'Error');
            console.log(error);
        });
    }
    goToPetList() {
        this.router.navigate(['/pet']);
    }
    petDetails(id) {
        this.router.navigate(['pet-details', id]);
    }
    Search() {
        if (this.name == "") {
            console.log(this.name);
            this.ngOnInit();
        }
        else {
            console.log(this.name);
            this.pets = this.pets.filter(res => {
                return res.name.toLowerCase().includes(this.name.toLowerCase());
            });
        }
    }
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    downloadGeneralLogs() {
        const url = 'http://localhost:8080/api/auth/generalLogs/download';
        this.http.post(url, null, { responseType: 'text' }).subscribe(response => {
            console.log(response);
            this.toastr.success('Your file is ready.', 'Success');
        }, error => {
            console.log(error);
        });
    }
};
__decorate([
    Input()
], PetListComponent.prototype, "color", null);
PetListComponent = __decorate([
    Component({
        selector: 'app-pet-list',
        templateUrl: './pet-list.component.html',
        styleUrls: ['./pet-list.component.css']
    })
], PetListComponent);
export { PetListComponent };
//# sourceMappingURL=pet-list.component.js.map