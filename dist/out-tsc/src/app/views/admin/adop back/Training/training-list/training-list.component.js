import { __decorate } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { createPopper } from '@popperjs/core';
let TrainingListComponent = class TrainingListComponent {
    constructor(trainingService, router) {
        this.trainingService = trainingService;
        this.router = router;
        this._color = "light";
        this.selectedPet = '';
        this.dogTrainingsCount = 0;
        this.catTrainingsCount = 0;
        this.totalTrainingsCount = this.catTrainingsCount + this.dogTrainingsCount;
        this.dogPercentage = Math.round((this.dogTrainingsCount / this.totalTrainingsCount) * 100);
        this.catPercentage = 100 - this.dogPercentage;
        this.p = 1;
        this.currentPage = 1;
        this.dropdownPopoverShow = false;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    ngOnInit() {
        this.trainingService.getTrainingStatistics().subscribe((data) => {
            this.dogTrainingCount = data.dogTrainingCount;
            this.catTrainingCount = data.catTrainingCount;
            console.log(`Dog Training Count: ${this.dogTrainingCount}`);
            console.log(`Cat Training Count: ${this.catTrainingCount}`);
        });
        this.getTrainings();
    }
    getTrainings() {
        this.trainingService.getTrainingsList().subscribe(data => {
            this.trainings = data.sort((a, b) => b.idTraining - a.idTraining);
            for (let i = 0; i < this.trainings.length; i++) {
                const idTraining = this.trainings[i].idTraining;
                this.trainingService.getReportsByTraining(idTraining).subscribe(report => {
                    this.trainings[i].report = report;
                });
            }
        });
    }
    updateTraining(idTraining) {
        this.router.navigate(['/admin/update-Training', idTraining]);
    }
    createTraining() {
        this.router.navigate(['/admin/create-Training']);
    }
    deleteTraining(idTraining) {
        this.trainingService.deleteTraining(idTraining).subscribe(data => {
            console.log(data);
            this.getTrainings();
        });
    }
    get filteredTrainings() {
        if (!this.trainings) {
            return [];
        }
        if (this.reportedTrainings && this.reportedTrainings.length > 0) {
            return this.reportedTrainings.filter(training => {
                var _a, _b;
                return (!this.searchTerm || ((_a = training.title) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(this.searchTerm.toLowerCase()))) &&
                    (!this.selectedPet || ((_b = training.type) === null || _b === void 0 ? void 0 : _b.toString()) === this.selectedPet);
            });
        }
        else if (!this.searchTerm && !this.selectedPet) {
            return this.trainings;
        }
        else {
            return this.trainings.filter(training => {
                var _a, _b;
                return (!this.searchTerm || ((_a = training.title) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(this.searchTerm.toLowerCase()))) &&
                    (!this.selectedPet || ((_b = training.type) === null || _b === void 0 ? void 0 : _b.toString()) === this.selectedPet);
            });
        }
    }
    reportTraining(idTraining) {
        const message = prompt('Please enter a reason for reporting this training:');
        if (message !== null) {
            this.trainingService.reportTraining(idTraining, message).subscribe({
                next: response => console.log(response),
                error: error => console.log(error),
                complete: () => {
                    console.log('Reported training successfully');
                }
            });
        }
    }
    getReportedTrainings() {
        this.trainingService.getReportedTrainings().subscribe({
            next: (trainings) => {
                this.reportedTrainings = trainings;
                console.log(trainings);
                // Fetch the reports for each reported training
                for (let i = 0; i < this.reportedTrainings.length; i++) {
                    const reportedTraining = this.reportedTrainings[i];
                    this.trainingService.getReportsByTraining(reportedTraining.idTraining).subscribe({
                        next: (reports) => {
                            reportedTraining.report = reports;
                            console.log(reports);
                        },
                        error: (error) => console.log(error)
                    });
                }
            },
            error: (error) => console.log(error)
        });
    }
    ngAfterViewInit() {
        createPopper(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
        }
    }
};
__decorate([
    Input()
], TrainingListComponent.prototype, "color", null);
__decorate([
    ViewChild("btnDropdownRef", { static: false })
], TrainingListComponent.prototype, "btnDropdownRef", void 0);
__decorate([
    ViewChild("popoverDropdownRef", { static: false })
], TrainingListComponent.prototype, "popoverDropdownRef", void 0);
TrainingListComponent = __decorate([
    Component({
        selector: 'app-training-list',
        templateUrl: './training-list.component.html',
        styleUrls: ['./training-list.component.css']
    })
], TrainingListComponent);
export { TrainingListComponent };
//# sourceMappingURL=training-list.component.js.map