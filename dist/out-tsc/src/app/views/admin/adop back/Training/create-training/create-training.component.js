import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Training } from '../training';
import { Validators } from '@angular/forms';
let CreateTrainingComponent = class CreateTrainingComponent {
    constructor(trainingService, router, formBuilder) {
        this.trainingService = trainingService;
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
        this.trainingForm = this.formBuilder.group({
            title: [null, [Validators.required]],
            description: [null, [Validators.required]],
            duration: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
            type: [null, [Validators.required]],
            price: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
            nbrplaces: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
            cDate: [null, [Validators.required]]
        });
    }
    saveTraining() {
        this.trainingService.createTraining(this.training)
            .subscribe({
            next: (data) => {
                console.log(data);
                this.goToTrainingList();
            },
            error: (error) => console.log(error)
        });
    }
    goToTrainingList() {
        this.router.navigate(['/admin/training-list']);
    }
    onSubmit() {
        if (this.trainingForm.valid) {
            console.log(this.trainingForm.value);
            this.saveTraining();
            return;
        }
    }
};
__decorate([
    Input()
], CreateTrainingComponent.prototype, "color", null);
CreateTrainingComponent = __decorate([
    Component({
        selector: 'app-create-training',
        templateUrl: './create-training.component.html',
        styleUrls: ['./create-training.component.css']
    })
], CreateTrainingComponent);
export { CreateTrainingComponent };
//# sourceMappingURL=create-training.component.js.map