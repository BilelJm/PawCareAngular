import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RegisterComponent = class RegisterComponent {
    constructor(authService) {
        this.authService = authService;
        this.form = {
            username: null,
            email: null,
            password: null,
            phone: null
        };
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    ngOnInit() { }
    onSubmit() {
        const { username, email, password, phone } = this.form;
        this.authService.register(username, email, password).subscribe({
            next: data => {
                console.log(data);
                this.isSuccessful = true;
                this.isSignUpFailed = false;
            },
            error: err => {
                this.errorMessage = err.error.message;
                this.isSignUpFailed = true;
            }
        });
    }
};
RegisterComponent = __decorate([
    Component({
        selector: "app-register",
        templateUrl: "./register.component.html",
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map