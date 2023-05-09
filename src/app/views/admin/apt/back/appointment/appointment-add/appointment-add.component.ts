import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../../pet/pet';
import { PetService } from '../../pet/pet.service';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.css']
})
export class AppointmentAddComponent implements OnInit {

  appointment:Appointment=new Appointment();
  pets: Pet[] = [];
  users: User[] = [];

  constructor(private appointmentService: AppointmentService,private router: Router,private petService:PetService,private userService:UserService, 
    private toastr: ToastrService){
    this.appointment.pet = new Pet(); 
    this.appointment.doctor=new User();
  }
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  
  ngOnInit(): void {
    this.getPets();
    this.getAllDoctors();
  }
  saveAppointment(){
    this.appointmentService.createAppointment(this.appointment).subscribe( data =>{
      this.toastr.success('Appointment saved successfully.', 'Success');
      console.log(data);
  
      this.goToAppointmentList();
    },
    error => {
      this.toastr.success('Error has occured.', 'Success');
      console.log(error);
    });
  }


  goToAppointmentList(){
    this.router.navigate(['/admin/appointment']);
  }

  private getPets()
  {
    this.petService.getPetsList().subscribe(data=> {
      this.pets=data;
    });
  }

  private getAllDoctors()
  {
    this.userService.getAllDoctors().subscribe(data=> {
      
      this.users=data;
      console.log(this.users);
    });
  }
  
  onSubmit(){
    console.log(this.appointment);
    this.saveAppointment();
  }
}

