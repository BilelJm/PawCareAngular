import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../pet.service';
import { Pet } from '../pet';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.css']
})
export class UpdatePetComponent {
  id!: number;
  pet: Pet = new Pet();
  isMale: boolean = false;
    constructor(private petService: PetService,
    private route: ActivatedRoute,
    private router: Router) { 
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.petService.getPetById(this.id).subscribe(data => {
      this.pet = data;
      this.isMale = (this.pet.gender === 'Male');
          });
  }

  onSubmit(){
    if (this.isFormValid()) {
    this.pet.gender = this.isMale ? 'Male' : 'Female';
       this.petService.updatePet(this.id, this.pet).subscribe( data =>{
      this.goToPetList();
    },
    error => {
      console.log(error);
    });
  } else {
    alert("Please fill all the fields before submitting.");
  }
}
isFormValid(): boolean {
  return !!(
    this.pet.name &&
    this.pet.specie &&
    this.pet.color &&
    this.pet.weight &&
    this.pet.picture
  );
}

  goToPetList(){
    this.router.navigate(['/pet']);
  }

}
