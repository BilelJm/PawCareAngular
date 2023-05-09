import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let UserapiService = class UserapiService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "http://localhost:8080/api/users";
    }
    getAllUsers() {
        return this.http.get(`${this.baseUrl}/list`);
    }
    getUserById(userId) {
        return this.http.get(`${this.baseUrl}/getUser/${userId}`);
    }
    getUsersByRole(roleName) {
        return this.http.get(`${this.baseUrl}/getUsersByRoleNative?role=${roleName}`);
    }
    updateUser(userId, userDetails) {
        return this.http.put(`${this.baseUrl}/updateUser/${userId}`, userDetails);
    }
    deleteUser(userId) {
        return this.http.delete(`${this.baseUrl}/deleteuser?id=${userId}`);
    }
    updateUserRoles(userId, roles) {
        const url = `${this.baseUrl}/update/${userId}/roles`;
        return this.http.put(url, roles);
    }
};
UserapiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserapiService);
export { UserapiService };
//# sourceMappingURL=userapi.service.js.map