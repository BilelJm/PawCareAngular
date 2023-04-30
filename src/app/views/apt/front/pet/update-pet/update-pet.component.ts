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
    this.pet.gender = this.isMale ? 'Male' : 'Female';
       this.petService.updatePet(this.id, this.pet).subscribe( data =>{
      this.goToPetList();
    },
    error => {
      console.log(error);
    });
  }

  goToPetList(){
    this.router.navigate(['/pet']);
  }

}
