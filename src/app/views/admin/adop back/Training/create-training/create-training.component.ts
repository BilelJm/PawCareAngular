import { Component, Input } from '@angular/core';
import { Training } from '../training';
import { OnInit } from '@angular/core';
import { TrainigService } from '../../Training/trainig.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-create-training',
  templateUrl: './create-training.component.html',
  styleUrls: ['./create-training.component.css']
})

export class CreateTrainingComponent implements OnInit {


  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  
  training: Training = new Training();
  trainingForm: FormGroup;
  
  

  constructor(private trainingService: TrainigService,
  private router: Router, private formBuilder: FormBuilder)
   {
    
  }

  
  ngOnInit(){
    this.trainingForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      duration: [null, [Validators.required,Validators.pattern("^[0-9]*$")]],
      type: [null, [Validators.required]],
      price: [null, [Validators.required,Validators.pattern("^[0-9]*$")]],
      nbrplaces: [null, [Validators.required,Validators.pattern("^[0-9]*$")]],
      cDate: [null, [Validators.required]]

    });
  }


  saveTraining(): void {
    this.trainingService.createTraining(this.training)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.goToTrainingList();
        },
        error: (error) => console.log(error)
      });
  }

  goToTrainingList(){
    this.router.navigate(['/admin/training-list']);
  }

  

  onSubmit(){ 

    if (this.trainingForm.valid) {
      console.log(this.trainingForm.value);
      this.saveTraining();
    return;}
}

   
  }


