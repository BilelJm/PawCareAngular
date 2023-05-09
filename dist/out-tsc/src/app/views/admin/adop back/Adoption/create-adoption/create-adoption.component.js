import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Adoption } from '../adoption';
import { Validators } from '@angular/forms';
let CreateAdoptionComponent = class CreateAdoptionComponent {
    constructor(adoptionService, router, formBuilder, http, toastr) {
        this.adoptionService = adoptionService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
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
        this.adoptionForm = this.formBuilder.group({
            description: [null, [Validators.required]],
            location: [null, [Validators.required]],
            title: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.email]],
        });
    }
    goToAdoptionList() {
        this.router.navigate(['/admin/adoption-list']);
    }
    onFileSelected(event) {
        var _a, _b;
        this.imageFile = (_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b[0];
    }
    onSubmit() {
        if (this.adoptionForm.valid) {
            this.adoptionService.addAdoption(this.adoption, this.imageFile).subscribe(response => {
                console.log(response);
                this.toastr.success('Adoption added successfully', 'Success');
                //  alert('Adoption added successfully');
                // navigate to adoption list page with new adoption ID as parameter
                this.router.navigate(['/admin/adoption-list'], { queryParams: { id: response.id } });
            }, error => {
                console.log(error);
                alert('Error adding adoption');
            });
        }
    }
};
__decorate([
    Input()
], CreateAdoptionComponent.prototype, "color", null);
CreateAdoptionComponent = __decorate([
    Component({
        selector: 'app-create-adoption',
        templateUrl: './create-adoption.component.html',
        styleUrls: ['./create-adoption.component.css']
    })
], CreateAdoptionComponent);
export { CreateAdoptionComponent };
//# sourceMappingURL=create-adoption.component.js.map