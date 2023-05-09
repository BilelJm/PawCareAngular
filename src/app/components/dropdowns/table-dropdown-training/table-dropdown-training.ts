import { Component, AfterViewInit, ViewChild, ElementRef, Input } from "@angular/core";
import { Router } from "@angular/router";
import { createPopper } from "@popperjs/core";
import { TrainigService } from "src/app/views/admin/adop back/Training/trainig.service";
import { Training } from "src/app/views/admin/adop back/Training/training";

@Component({
  selector: "app-table-dropdown-training",
  templateUrl: "./table-dropdown-training.component.html",
})
export class TableDropdownTrainingComponent implements AfterViewInit {


  constructor(private trainingService:TrainigService, private router: Router){}
  trainings: Training[];
  reportedTrainings: Training[];
  searchTerm: string;
  selectedPet: string = '';

  @Input() training: Training;


  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef: ElementRef;
  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }
  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }


  updateTraining(idTraining: number){
    this.router.navigate(['/admin/update-Training', idTraining]);
  }

  getTrainings(){
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

  deleteTraining(idTraining: number){
    this.trainingService.deleteTraining(idTraining).subscribe( data => {
      console.log(data);
      this.getTrainings();
    })
  }

  reportTraining(idTraining: number) {
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

  get filteredTrainings(): Training[] {
    if (!this.trainings) {
      return [];
    }
  
    if (this.reportedTrainings && this.reportedTrainings.length > 0) {
      return this.reportedTrainings.filter(training =>
        (!this.searchTerm || training.title?.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
        (!this.selectedPet || training.type?.toString() === this.selectedPet)
      );
    } else if (!this.searchTerm && !this.selectedPet) {
      return this.trainings;
    } else {
      return this.trainings.filter(training =>
        (!this.searchTerm || training.title?.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
        (!this.selectedPet || training.type?.toString() === this.selectedPet)
      );
    }

   
  }}
