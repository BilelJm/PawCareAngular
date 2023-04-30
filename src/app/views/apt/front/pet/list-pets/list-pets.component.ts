import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../pet.service';
import { Pet } from '../pet';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css']
})
export class ListPetsComponent implements OnInit {
  pet:Pet=new Pet();
  pets: Pet[] = []; 
  p:number=1;
  currentPage:number=1;
  name: string='';
  confirmDelete: { [id: number]: boolean } = {};

constructor(private petService:PetService,private router: Router,private http: HttpClient){}

  ngOnInit(): void {
    this.getPets();
  }
  private getPets() {
    this.petService.getPetsbyUserid(2).subscribe(data => {
      this.pets = data
        .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
        .filter((pet, index, self) => {
          const petIds = self.map(p => p.idPet); // Get an array of all pet IDs
          return petIds.indexOf(pet.idPet) === index; // Check if the current pet ID is the first occurrence in the array
        });
    });
  }
  
  updatePet(id: number){
    this.router.navigate(['pet/update-pet', id]);
  }

  deletePet(id: number) {
      this.petService.deletePet(id).subscribe(
        (data) => {
          this.getPets();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  
  

  goToPetList(){
    this.router.navigate(['/pet']);
  }
  petDetails(id: number){
    this.router.navigate(['pet-details', id]);
  }



}
