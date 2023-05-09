import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(username, password) {
        return this.http.post(AUTH_API + 'signin', {
            username,
            password,
        }, httpOptions);
    }
    register(username, email, password) {
        return this.http.post(AUTH_API + 'signup', {
            username,
            email,
            password
        }, httpOptions);
    }
    logout() {
        return this.http.post(AUTH_API + 'signout', {}, httpOptions);
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map