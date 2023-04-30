import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../pet';
import { PetService } from '../pet.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html',
  styleUrls: ['./pet-update.component.css']
})
export class PetUpdateComponent implements OnInit {

  
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
 
  id!: number;
  pet: Pet = new Pet();
  isMale: boolean = false;
    constructor(private petService: PetService,
    private route: ActivatedRoute,
    private router: Router,private toastr: ToastrService) { 
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.petService.getPetById(this.id).subscribe(data => {
      this.pet = data;
      this.isMale = (this.pet.gender === 'Male');
          });
  }

  onSubmit(){
    this.pet.gender = this.isMale ? 'Male' : 'Female';
       this.petService.updatePet(this.id, this.pet).subscribe( data =>{
        this.toastr.success('Pet updated successfully.', 'Success');
      this.goToPetList();
    },
    error => {
      this.toastr.error('An Error has occured.', 'Error');
      console.log(error);
    });
  }

  goToPetList(){
    this.router.navigate(['/admin/pet']);
  }


}
