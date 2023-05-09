import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Adoption } from '../adoption';
import { OnInit } from '@angular/core';
import { AdoptionService } from '../adoption.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Pet } from '../../../apt/back/pet/pet';
import { PetService } from '../../../apt/back/pet/pet.service';



@Component({
  selector: 'app-create-adoption',
  templateUrl: './create-adoption.component.html',
  styleUrls: ['./create-adoption.component.css']
})


export class CreateAdoptionComponent implements OnInit {

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  
  adoption: Adoption = new Adoption();
  adoptionForm: FormGroup;
  pets: Pet[] = [];

  constructor(private adoptionService: AdoptionService,
    private router: Router,private formBuilder: FormBuilder,private http: HttpClient,
    private toastr: ToastrService,private petService:PetService) { this.adoption.pet=new Pet();}
    
     

    
  ngOnInit(): void {
    this.adoptionForm = this.formBuilder.group({
      description: [null, [Validators.required]],
      location: [null, [Validators.required]],
      title: [null, [Validators.required]], 
      email: [null, [Validators.required,Validators.email]],
      idPet:[null]
     
     
    });
    this.getPets();
  }

  

  goToAdoptionList(){
    this.router.navigate(['/admin/adoption-list']);
  }

  imageFile: File;
  onFileSelected(event: any) {
    this.imageFile = event.target?.files?.[0];
  }
  
  
  onSubmit() {
    if (this.adoptionForm.valid) {
      this.adoptionService.addAdoption(this.adoption, this.imageFile,this.adoption.IdPet).subscribe(
        response => {
          console.log(response);
          this.toastr.success('Adoption added successfully','Success');
        //  alert('Adoption added successfully');
          // navigate to adoption list page with new adoption ID as parameter
          this.router.navigate(['/admin/adoption-list'], { queryParams: { id: response.id } });
        },
        error => {
          console.log(error);
          console.log(this.adoptionForm)
          alert('Error adding adoption');
        }
      );
    }
  }
  
  
  private getPets()
  {
    this.petService.getPetsList().subscribe(data=> {
      this.pets=data;
    });
  }




}

