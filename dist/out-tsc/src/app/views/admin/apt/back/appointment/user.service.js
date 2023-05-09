import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let UserService = class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.Url = "http://localhost:8080/api/auth/";
    }
    getAllDoctors() {
        return this.httpClient.get(`${this.Url + "GetAllDoctors"}`);
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map