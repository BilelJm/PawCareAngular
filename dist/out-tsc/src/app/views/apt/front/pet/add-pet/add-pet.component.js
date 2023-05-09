import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Pet } from '../pet';
let AddPetComponent = class AddPetComponent {
    constructor(petService, router) {
        this.petService = petService;
        this.router = router;
        this.pet = new Pet();
    }
    ngOnInit() {
    }
    savePet() {
        this.petService.createPet(this.pet).subscribe(data => {
            console.log(data);
            this.goToCalendar();
        }, error => {
            console.log(error);
        });
    }
    goToCalendar() {
        this.router.navigate(['/calendrier']);
    }
    onSubmit() {
        if (this.isFormValid()) {
            if (this.pet.gender) {
                this.pet.gender = "Male";
            }
            else {
                this.pet.gender = "Female";
            }
            // send the pet data to the database
            this.savePet();
        }
        else {
            alert("Please fill all the fields before submitting.");
        }
    }
    isFormValid() {
        return !!(this.pet.name &&
            this.pet.specie &&
            this.pet.color &&
            this.pet.weight &&
            this.pet.picture);
    }
};
AddPetComponent = __decorate([
    Component({
        selector: 'app-add-pet',
        templateUrl: './add-pet.component.html',
        styleUrls: ['./add-pet.component.css']
    })
], AddPetComponent);
export { AddPetComponent };
//# sourceMappingURL=add-pet.component.js.map