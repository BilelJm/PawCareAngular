import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let UserListComponent = class UserListComponent {
    constructor(userapiService, router) {
        this.userapiService = userapiService;
        this.router = router;
        this._color = "light";
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    ngOnInit() {
        this.userapiService.getAllUsers().subscribe(users => {
            this.users = users;
            console.log(this.users);
        });
    }
    updateUser(id) {
        this.router.navigate(['/admin/userupdate', id]);
    }
    deleteUser(userId) {
        this.userapiService.deleteUser(userId)
            .subscribe(() => {
            this.users = this.users.filter(user => user.id !== userId);
        });
    }
};
__decorate([
    Input()
], UserListComponent.prototype, "color", null);
UserListComponent = __decorate([
    Component({
        selector: 'app-user-list',
        templateUrl: './user-list.component.html',
        styleUrls: ['./user-list.component.css']
    })
], UserListComponent);
export { UserListComponent };
//# sourceMappingURL=user-list.component.js.map