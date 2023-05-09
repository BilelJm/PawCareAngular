import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
const USER_KEY = 'auth-user';
let StorageService = class StorageService {
    constructor() { }
    clean() {
        window.sessionStorage.clear();
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }
    isLoggedIn() {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return true;
        }
        return false;
    }
};
StorageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StorageService);
export { StorageService };
//# sourceMappingURL=storage.service.js.map