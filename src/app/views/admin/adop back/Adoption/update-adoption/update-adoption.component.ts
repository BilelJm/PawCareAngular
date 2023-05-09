import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Adoption } from '../../Adoption/adoption'; 
import { AdoptionService } from '../../Adoption/adoption.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-update-adoption',
  templateUrl: './update-adoption.component.html',
  styleUrls: ['./update-adoption.component.css']
})
export class UpdateAdoptionComponent implements OnInit {

  
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  
  adoptionForm: FormGroup;
    idAdoption: number;
    adoption: Adoption = new Adoption();
    constructor(private adoptionService: AdoptionService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService) { }

    ngOnInit(): void {
      this.idAdoption = this.route.snapshot.params['id'];
    
      const observer = {
        next: (data: Adoption) => {
          this.adoption = data;
          this.adoptionForm.setValue({
            title: data.title,
            description: data.description,
            location: data.location,
            email: data.email
          });
        },
        error: (error: any) => {
          console.log(error);
        }
      };
      
      this.adoptionService.getAdoptionById(this.idAdoption).subscribe(observer);
    
      this.adoptionForm = this.fb.group({
        description: [null, [Validators.required]],
        location: [null, [Validators.required]],
        title: [null, [Validators.required]], 
        email: [null, [Validators.required, Validators.email]],
      });
    }
    

  
  imageFile: File;

  onFileSelected(event: any) {
    this.imageFile = event.target?.files?.[0];
  }
  
  onSubmit(): void {
    const observer = {
      next: (data: any) => {
        this.toastr.success('Adoption updated successfully','Success');
        console.log(data); 
        this.goToAdoptionList(); 
      },
      error: (error: any) => {
        console.log(error); 
      }
    };
    this.adoptionService.updateAdoption(this.idAdoption, this.adoption, this.imageFile).subscribe(observer);
  }
  

  goToAdoptionList(){
    this.router.navigate(['/admin/adoption-list']);
  }

}
