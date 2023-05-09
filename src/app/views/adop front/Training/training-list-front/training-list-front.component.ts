import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Type } from '@angular/compiler';
import { Training } from 'src/app/views/admin/adop back/Training/training';
import { TrainigService } from 'src/app/views/admin/adop back/Training/trainig.service';
import { PetService } from 'src/app/views/apt/front/pet/pet.service';
import { Pet } from 'src/app/views/apt/front/pet/pet';




@Component({
  selector: 'app-training-list',
  templateUrl: './training-list-front.component.html',
  styleUrls: ['./training-list-front.component.css']
})
export class TrainingListFrontComponent implements OnInit {
  
  trainings: Training[];
  training:Training;
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
  pets: Pet[] = [];
  selectedOption:any;

  constructor(private petService:PetService,private trainingService:TrainigService , private router: Router){
   // this.training.pet=new Pet();
  }


  ngOnInit(): void { 
    this.trainingService.getTrainingStatistics().subscribe((data: any) => {
      this.dogTrainingCount = data.dogTrainingCount;
      this.catTrainingCount = data.catTrainingCount;
      console.log(`Dog Training Count: ${this.dogTrainingCount}`);
      console.log(`Cat Training Count: ${this.catTrainingCount}`);
    });    
  
    this.getTrainings();    
    this.getPets();
  }


  get filteredTrainings(): Training[] {
    if (this.reportedTrainings && this.reportedTrainings.length > 0) {
      return this.reportedTrainings.filter(training =>
        (!this.searchTerm || (training.title && training.title.toLowerCase().includes(this.searchTerm.toLowerCase()))) && // add null check for training.title here
        (!this.selectedPet || (training.type && training.type.toString() === this.selectedPet))
      );
    } else if (!this.searchTerm && !this.selectedPet) {
      return this.trainings;
    } else {
      return this.trainings.filter(training =>
        (!this.searchTerm || (training.title && training.title.toLowerCase().includes(this.searchTerm.toLowerCase()))) && // add null check for training.title here
        (!this.selectedPet || (training.type && training.type.toString() === this.selectedPet))
      );
    }
  }
  
  

   getTrainings(){
    this.trainingService.getTrainingsList().subscribe(data => {
      this.trainings = data.sort((a, b) => b.idTraining - a.idTraining);
    });
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
  

 

  book(idTraining: number) {
    console.log(this.selectedOption);
   this.trainingService.book(idTraining,this.selectedOption).subscribe(() => {
      const updatedTraining = this.trainings.find(training => training.idTraining === idTraining);
      updatedTraining.nbrplaces -= 1;
    }, (error) => {
      console.error(error);
    });
  }
  

  private getPets()
  {
    this.petService.getPetsList().subscribe(data=> {
      this.pets=data;
    });
  }

   
    
  }
 

  





