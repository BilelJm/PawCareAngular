import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(authService, storageService, router) {
        this.authService = authService;
        this.storageService = storageService;
        this.router = router;
        this.form = {
            username: null,
            password: null
        };
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    ngOnInit() {
        if (this.storageService.isLoggedIn()) {
            this.isLoggedIn = true;
            this.roles = this.storageService.getUser().roles;
        }
    }
    onSubmit() {
        const { username, password } = this.form;
        this.authService.login(username, password).subscribe({
            next: data => {
                this.storageService.saveUser(data);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                const user = this.storageService.getUser();
                this.roles = user.roles;
                console.log('User:', user);
                console.log('Roles:', user.roles);
                if (this.storageService.getUser().roles.includes('ROLE_ADMIN')) {
                    // navigate to the desired route
                    this.router.navigate(['/admin/users']);
                    console.log(this.storageService.getUser().roles);
                }
                else if (this.roles.includes('ROLE_CLIENT') || this.roles.includes('ROLE_VETERINARY')) {
                    // navigate to the desired route
                    this.router.navigate(['']);
                    console.log(this.storageService.getUser().roles);
                }
            },
            error: err => {
                this.errorMessage = err.error.message;
                this.isLoginFailed = true;
                console.log("login failed");
            }
        });
    }
    reloadPage() {
        window.location.reload();
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html'
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map