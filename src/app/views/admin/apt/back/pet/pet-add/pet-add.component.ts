import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../pet';
import { PetService } from '../pet.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  pet:Pet=new Pet();
  constructor(private petService: PetService,private router: Router,private toastr: ToastrService){}

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  ngOnInit(): void {
  }
  savePet(){
    this.petService.createPet(this.pet).subscribe( data =>{
      console.log(data);
      this.toastr.success('Pet saved successfully.', 'Success');
      this.goToPetList();
    },
    error => {
      this.toastr.error('An Error Has occured.', 'Error');
      console.log(error);
    });
  }


  goToPetList(){
    this.router.navigate(['/admin/pet']);
  }
  
  onSubmit(){
   
    console.log(this.pet);
   
      if (this.pet.gender) {
          this.pet.gender = "Male";
      } else {
          this.pet.gender = "Female";
      }
      // send the pet data to the database
  
  
    this.savePet();
    
  }

}
