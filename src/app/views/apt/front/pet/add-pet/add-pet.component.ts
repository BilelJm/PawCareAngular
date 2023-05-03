import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../pet.service';
import { Pet } from '../pet';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  pet:Pet=new Pet();
  constructor(private petService: PetService,private router: Router){}

  ngOnInit(): void {
  }
  savePet(){
    this.petService.createPet(this.pet).subscribe( data =>{
      console.log(data);
      this.goToCalendar();
    },
    error => {
      console.log(error);
    });
  }


  goToCalendar(){
    this.router.navigate(['/calendrier']);
  }
  
  onSubmit() {
    if (this.isFormValid()) {
      if (this.pet.gender) {
        this.pet.gender = "Male";
      } else {
        this.pet.gender = "Female";
      }
      // send the pet data to the database
      this.savePet();
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
  
  

}