import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AdoptionService = class AdoptionService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = "http://localhost:8080/adoption/adoption";
    }
    getAdoptionList() {
        return this.httpClient.get(`${this.baseURL}`);
    }
    addAdoption(adoption, imageFile) {
        const formData = new FormData();
        formData.append('title', adoption.title);
        formData.append('location', adoption.location);
        formData.append('description', adoption.description);
        formData.append('Email', adoption.email);
        formData.append('imageFile', imageFile);
        return this.httpClient.post(`${this.baseURL}`, formData);
    }
    updateAdoption(idAdoption, adoption, imageFile) {
        const formData = new FormData();
        formData.append('title', adoption.title);
        formData.append('location', adoption.location);
        formData.append('description', adoption.description);
        formData.append('Email', adoption.email);
        if (imageFile) {
            formData.append('imageFile', imageFile, imageFile.name);
        }
        return this.httpClient.put(`${this.baseURL}/${idAdoption}`, formData);
    }
    getAdoptionById(idAdoption) {
        return this.httpClient.get(`${this.baseURL}/${idAdoption}`);
    }
    deleteAdoption(idAdoption) {
        return this.httpClient.delete(`${this.baseURL}/${idAdoption}`);
    }
};
AdoptionService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AdoptionService);
export { AdoptionService };
//# sourceMappingURL=adoption.service.js.map