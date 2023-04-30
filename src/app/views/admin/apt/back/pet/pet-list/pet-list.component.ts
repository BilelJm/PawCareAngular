import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PetService } from '../pet.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pet: Pet = new Pet();
  pets: Pet[] = [];
  p: number = 1;
  currentPage: number = 1;
  name: string = '';


  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  constructor(private petService: PetService, private router: Router, private http: HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getPets();
  }
  private getPets() {
    this.petService.getPetsList().subscribe(data => {
      console.log(data); // Add this line
      this.pets = data;
    });
  }


  updatePet(id: number) {
    this.router.navigate(['/admin/update-pet', id]);
  }

  deletePet(id: number) {
    this.petService.deletePet(id).subscribe(data => {
      console.log(data);
      this.toastr.success('Pet deleted successfully.', 'Success');

      this.getPets();
    },
      error => {
        this.toastr.error('An Error Has occured.', 'Error');

        console.log(error);
      });
  }


  goToPetList() {
    this.router.navigate(['/pet']);
  }
  petDetails(id: number) {
    this.router.navigate(['pet-details', id]);
  }

  Search() {
    if (this.name == "") {
      console.log(this.name);
      this.ngOnInit();
    } else {
      console.log(this.name);
      this.pets = this.pets.filter(res => {
        return res.name.toLowerCase().includes(this.name.toLowerCase())
      });
    }
  }

  key = 'idPet';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  downloadGeneralLogs(): void {
    const url = 'http://localhost:8080/generalLogs/download';
    this.http.post(url, null, { responseType: 'text' }).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

}
