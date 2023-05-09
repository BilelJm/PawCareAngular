import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let PetService = class PetService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = "http://localhost:8080/api/auth/pet/";
    }
    getPetsList() {
        return this.httpClient.get(`${this.baseURL + "GetAll"}`);
    }
    createPet(pet) {
        return this.httpClient.post(`${this.baseURL + "addPet"}`, pet);
    }
    getPetById(id) {
        return this.httpClient.get(`${this.baseURL + "GetPet/"}${id}`);
    }
    updatePet(id, pet) {
        return this.httpClient.put(`${this.baseURL + "updatePet/"}${id}`, pet);
    }
    deletePet(id) {
        return this.httpClient.delete(`${this.baseURL + "deletePet/"}${id}`);
    }
    getPetsbyUserid(id) {
        return this.httpClient.get(`${this.baseURL + "GetPetsbyUserid/"}${id}`).pipe(map(pet => [pet]));
    }
};
PetService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PetService);
export { PetService };
//# sourceMappingURL=pet.service.js.map