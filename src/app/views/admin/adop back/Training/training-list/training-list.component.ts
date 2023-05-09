import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Training } from '../training';
import { TrainigService } from '../trainig.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Type } from '@angular/compiler';
import { createPopper } from '@popperjs/core';




@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {
  

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";


  trainings: Training[];
  type :Type;
  searchTerm: string;
  selectedPet: string = '';
  dogTrainingsCount = 0;
  catTrainingsCount = 0;
  totalTrainingsCount=this.catTrainingsCount+this.dogTrainingsCount;
  dogPercentage = Math.round((this.dogTrainingsCount / this.totalTrainingsCount) * 100);
  catPercentage = 100 - this.dogPercentage;
  reportedTrainings: Training[];

  dogTrainingCount: number;
  catTrainingCount: number;
  p: number = 1;
  currentPage: number = 1;
  
  constructor(private trainingService:TrainigService, private router: Router){}


  ngOnInit(): void {    
    this.trainingService.getTrainingStatistics().subscribe((data: any) => {
      this.dogTrainingCount = data.dogTrainingCount;
      this.catTrainingCount = data.catTrainingCount;
      console.log(`Dog Training Count: ${this.dogTrainingCount}`);
      console.log(`Cat Training Count: ${this.catTrainingCount}`);
    });
    this.getTrainings();    
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

  updateTraining(idTraining: number){
    this.router.navigate(['/admin/update-Training', idTraining]);
  }

  createTraining(){
    this.router.navigate(['/admin/create-Training']);
  }

  deleteTraining(idTraining: number){
    this.trainingService.deleteTraining(idTraining).subscribe( data => {
      console.log(data);
      this.getTrainings();
    })
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
  
        // Fetch the reports for each reported training
        for (let i = 0; i < this.reportedTrainings.length; i++) {
          const reportedTraining = this.reportedTrainings[i];
          this.trainingService.getReportsByTraining(reportedTraining.idTraining).subscribe({
            next: (reports) => {
              reportedTraining.report= reports;
              console.log(reports);
            },
            error: (error) => console.log(error)
          });
        }
      },
      error: (error) => console.log(error)
    });
  }
  
  


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
   
    
  }
 

  





