import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Pet } from '../pet';
let PetUpdateComponent = class PetUpdateComponent {
    constructor(petService, route, router, toastr) {
        this.petService = petService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this._color = "light";
        this.pet = new Pet();
        this.isMale = false;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.petService.getPetById(this.id).subscribe(data => {
            this.pet = data;
            this.isMale = (this.pet.gender === 'Male');
        });
    }
    onSubmit() {
        this.pet.gender = this.isMale ? 'Male' : 'Female';
        this.petService.updatePet(this.id, this.pet).subscribe(data => {
            this.toastr.success('Pet updated successfully.', 'Success');
            this.goToPetList();
        }, error => {
            this.toastr.error('An Error has occured.', 'Error');
            console.log(error);
        });
    }
    goToPetList() {
        this.router.navigate(['/admin/pet']);
    }
};
__decorate([
    Input()
], PetUpdateComponent.prototype, "color", null);
PetUpdateComponent = __decorate([
    Component({
        selector: 'app-pet-update',
        templateUrl: './pet-update.component.html',
        styleUrls: ['./pet-update.component.css']
    })
], PetUpdateComponent);
export { PetUpdateComponent };
//# sourceMappingURL=pet-update.component.js.map