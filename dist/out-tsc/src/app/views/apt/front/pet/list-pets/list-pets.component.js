import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Pet } from '../pet';
let ListPetsComponent = class ListPetsComponent {
    constructor(petService, router, http, storageService) {
        this.petService = petService;
        this.router = router;
        this.http = http;
        this.storageService = storageService;
        this.pet = new Pet();
        this.pets = [];
        this.p = 1;
        this.currentPage = 1;
        this.name = '';
        this.confirmDelete = {};
    }
    ngOnInit() {
        this.getPets();
    }
    getPets() {
        this.petService.getPetsbyUserid(this.storageService.getUser().id).subscribe(data => {
            this.pets = data
                .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
                .filter((pet, index, self) => {
                const petIds = self.map(p => p.idPet); // Get an array of all pet IDs
                return petIds.indexOf(pet.idPet) === index; // Check if the current pet ID is the first occurrence in the array
            });
        });
    }
    updatePet(id) {
        this.router.navigate(['pet/update-pet', id]);
    }
    deletePet(id) {
        this.petService.deletePet(id).subscribe((data) => {
            this.getPets();
        }, (error) => {
            console.log(error);
        });
    }
    goToPetList() {
        this.router.navigate(['/pet']);
    }
    petDetails(id) {
        this.router.navigate(['pet-details', id]);
    }
};
ListPetsComponent = __decorate([
    Component({
        selector: 'app-list-pets',
        templateUrl: './list-pets.component.html',
        styleUrls: ['./list-pets.component.css']
    })
], ListPetsComponent);
export { ListPetsComponent };
//# sourceMappingURL=list-pets.component.js.map