import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Adoption } from '../../Adoption/adoption';
import { Validators } from '@angular/forms';
let UpdateAdoptionComponent = class UpdateAdoptionComponent {
    constructor(adoptionService, route, router, fb, toastr) {
        this.adoptionService = adoptionService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this._color = "light";
        this.adoption = new Adoption();
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    ngOnInit() {
        this.idAdoption = this.route.snapshot.params['id'];
        const observer = {
            next: (data) => {
                this.adoption = data;
                this.adoptionForm.setValue({
                    title: data.title,
                    description: data.description,
                    location: data.location,
                    email: data.email
                });
            },
            error: (error) => {
                console.log(error);
            }
        };
        this.adoptionService.getAdoptionById(this.idAdoption).subscribe(observer);
        this.adoptionForm = this.fb.group({
            description: [null, [Validators.required]],
            location: [null, [Validators.required]],
            title: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.email]],
        });
    }
    onFileSelected(event) {
        var _a, _b;
        this.imageFile = (_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b[0];
    }
    onSubmit() {
        const observer = {
            next: (data) => {
                this.toastr.success('Adoption updated successfully', 'Success');
                console.log(data);
                this.goToAdoptionList();
            },
            error: (error) => {
                console.log(error);
            }
        };
        this.adoptionService.updateAdoption(this.idAdoption, this.adoption, this.imageFile).subscribe(observer);
    }
    goToAdoptionList() {
        this.router.navigate(['/admin/adoption-list']);
    }
};
__decorate([
    Input()
], UpdateAdoptionComponent.prototype, "color", null);
UpdateAdoptionComponent = __decorate([
    Component({
        selector: 'app-update-adoption',
        templateUrl: './update-adoption.component.html',
        styleUrls: ['./update-adoption.component.css']
    })
], UpdateAdoptionComponent);
export { UpdateAdoptionComponent };
//# sourceMappingURL=update-adoption.component.js.map