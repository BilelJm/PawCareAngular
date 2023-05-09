import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TrainingListFrontComponent = class TrainingListFrontComponent {
    constructor(trainingService, router) {
        this.trainingService = trainingService;
        this.router = router;
        this.selectedPet = '';
        this.dogTrainingsCount = 0;
        this.catTrainingsCount = 0;
        this.totalTrainingsCount = this.catTrainingsCount + this.dogTrainingsCount;
        this.dogPercentage = Math.round((this.dogTrainingsCount / this.totalTrainingsCount) * 100);
        this.catPercentage = 100 - this.dogPercentage;
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
    get filteredTrainings() {
        if (this.reportedTrainings && this.reportedTrainings.length > 0) {
            return this.reportedTrainings.filter(training => (!this.searchTerm || (training.title && training.title.toLowerCase().includes(this.searchTerm.toLowerCase()))) && // add null check for training.title here
                (!this.selectedPet || (training.type && training.type.toString() === this.selectedPet)));
        }
        else if (!this.searchTerm && !this.selectedPet) {
            return this.trainings;
        }
        else {
            return this.trainings.filter(training => (!this.searchTerm || (training.title && training.title.toLowerCase().includes(this.searchTerm.toLowerCase()))) && // add null check for training.title here
                (!this.selectedPet || (training.type && training.type.toString() === this.selectedPet)));
        }
    }
    getTrainings() {
        this.trainingService.getTrainingsList().subscribe(data => {
            this.trainings = data.sort((a, b) => b.idTraining - a.idTraining);
        });
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
            },
            error: (error) => console.log(error)
        });
    }
    book(idTraining) {
        this.trainingService.book(idTraining).subscribe(() => {
            const updatedTraining = this.trainings.find(training => training.idTraining === idTraining);
            updatedTraining.nbrplaces -= 1;
        }, (error) => {
            console.error(error);
        });
    }
};
TrainingListFrontComponent = __decorate([
    Component({
        selector: 'app-training-list',
        templateUrl: './training-list-front.component.html',
        styleUrls: ['./training-list-front.component.css']
    })
], TrainingListFrontComponent);
export { TrainingListFrontComponent };
//# sourceMappingURL=training-list-front.component.js.map