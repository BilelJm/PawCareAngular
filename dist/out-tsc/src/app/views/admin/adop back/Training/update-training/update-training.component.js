import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { Training } from '../training';
let UpdateTrainingComponent = class UpdateTrainingComponent {
    constructor(trainingService, route, router, formBuilder) {
        this.trainingService = trainingService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this._color = "light";
        this.training = new Training();
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    ngOnInit() {
        this.idTraining = this.route.snapshot.params['id'];
        const observer = {
            next: (data) => {
                this.training = data;
            },
            error: (error) => {
                console.log(error);
            }
        };
        this.trainingService.getTrainingById(this.idTraining).subscribe(observer);
        this.trainingForm = this.formBuilder.group({
            title: [null],
            description: [null],
            duration: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
            type: [null],
            price: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
            nbrplaces: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
            cDate: [null]
        });
    }
    onSubmit() {
        this.trainingForm.patchValue({
            cDate: new Date(this.trainingForm.value.cDate).toISOString()
        });
        const observer = {
            next: (data) => {
                this.goToTrainingList();
            },
            error: (error) => {
                console.log(error);
            }
        };
        this.trainingService.updateTraining(this.idTraining, this.trainingForm.value).subscribe(observer);
    }
    goToTrainingList() {
        this.router.navigate(['/admin/training-list']);
    }
};
__decorate([
    Input()
], UpdateTrainingComponent.prototype, "color", null);
UpdateTrainingComponent = __decorate([
    Component({
        selector: 'app-update-training',
        templateUrl: './update-training.component.html',
        styleUrls: ['./update-training.component.css']
    })
], UpdateTrainingComponent);
export { UpdateTrainingComponent };
//# sourceMappingURL=update-training.component.js.map