import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Pet } from '../pet';
let PetAddComponent = class PetAddComponent {
    constructor(petService, router, toastr) {
        this.petService = petService;
        this.router = router;
        this.toastr = toastr;
        this.pet = new Pet();
        this._color = "light";
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    ngOnInit() {
    }
    savePet() {
        this.petService.createPet(this.pet).subscribe(data => {
            console.log(data);
            this.toastr.success('Pet saved successfully.', 'Success');
            this.goToPetList();
        }, error => {
            this.toastr.error('An Error Has occured.', 'Error');
            console.log(error);
        });
    }
    goToPetList() {
        this.router.navigate(['/admin/pet']);
    }
    onSubmit() {
        console.log(this.pet);
        if (this.pet.gender) {
            this.pet.gender = "Male";
        }
        else {
            this.pet.gender = "Female";
        }
        // send the pet data to the database
        this.savePet();
    }
};
__decorate([
    Input()
], PetAddComponent.prototype, "color", null);
PetAddComponent = __decorate([
    Component({
        selector: 'app-pet-add',
        templateUrl: './pet-add.component.html',
        styleUrls: ['./pet-add.component.css']
    })
], PetAddComponent);
export { PetAddComponent };
//# sourceMappingURL=pet-add.component.js.map