import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Training } from '../training';
import { TrainigService } from '../trainig.service';

@Component({
  selector: 'app-update-training',
  templateUrl: './update-training.component.html',
  styleUrls: ['./update-training.component.css']
})

export class UpdateTrainingComponent implements OnInit {

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }

  private _color = "light";

  idTraining: number;
  training: Training = new Training();
  trainingForm: FormGroup;

  constructor(private trainingService: TrainigService,
    private route: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.idTraining = this.route.snapshot.params['id'];
    const observer = {
      next: (data: Training) => {
        this.training = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    }; 
    
    this.trainingService.getTrainingById(this.idTraining).subscribe(observer);
    this.trainingForm = this.formBuilder.group({
      title: [null],
      description: [null],
      duration: [null, [Validators.required,Validators.pattern("^[0-9]*$")]],
      type: [null],
      price: [null, [Validators.required,Validators.pattern("^[0-9]*$")]],
      nbrplaces: [null, [Validators.required,Validators.pattern("^[0-9]*$")]],
      cDate: [null]

    });
  }

  onSubmit(){
    this.trainingForm.patchValue({
      cDate: new Date(this.trainingForm.value.cDate).toISOString()
    });
  
    const observer = {
      next: (data: any) => {
        this.goToTrainingList();
      },
      error: (error: any) => {
        console.log(error);
      }
    };
      
    this.trainingService.updateTraining(this.idTraining, this.trainingForm.value).subscribe(observer);
  }
  

  goToTrainingList(){
    this.router.navigate(['/admin/training-list']);
  }
 
}

