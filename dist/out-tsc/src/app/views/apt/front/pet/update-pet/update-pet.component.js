import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Pet } from '../pet';
let UpdatePetComponent = class UpdatePetComponent {
    constructor(petService, route, router) {
        this.petService = petService;
        this.route = route;
        this.router = router;
        this.pet = new Pet();
        this.isMale = false;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.petService.getPetById(this.id).subscribe(data => {
            this.pet = data;
            this.isMale = (this.pet.gender === 'Male');
        });
    }
    onSubmit() {
        if (this.isFormValid()) {
            this.pet.gender = this.isMale ? 'Male' : 'Female';
            this.petService.updatePet(this.id, this.pet).subscribe(data => {
                this.goToPetList();
            }, error => {
                console.log(error);
            });
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
    goToPetList() {
        this.router.navigate(['/pet']);
    }
};
UpdatePetComponent = __decorate([
    Component({
        selector: 'app-update-pet',
        templateUrl: './update-pet.component.html',
        styleUrls: ['./update-pet.component.css']
    })
], UpdatePetComponent);
export { UpdatePetComponent };
//# sourceMappingURL=update-pet.component.js.map