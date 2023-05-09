import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../../pet/pet';
import { PetService } from '../../pet/pet.service';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-appointment-update',
  templateUrl: './appointment-update.component.html',
  styleUrls: ['./appointment-update.component.css']
})
export class AppointmentUpdateComponent implements OnInit {

  pets: Pet[] = [];
  users: User[]=[];
  id!: number;
  appointment: Appointment = new Appointment();
  constructor(private appointmentService: AppointmentService,
    private route: ActivatedRoute,
    private router: Router,private petService:PetService,private userService:UserService, private toastr: ToastrService) {
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
    this.id = this.route.snapshot.params['id'];
    this.getPets();
    this.getAllDoctors();

    this.appointmentService.getAppointmentById(this.id).subscribe(data => {
      this.appointment = data;
      if (this.appointment.doctor === null) {
        this.appointment.doctor = new User();
      }
    });
  }

  onSubmit(){
    this.appointmentService.updateAppointment(this.id, this.appointment).subscribe( data =>{
      this.toastr.success('Appointment updated successfully.', 'Success');

      this.goToAppointmentList();
    },
    error => {
      this.toastr.error('An error has occured.', 'Error');
      console.log(error);
    });
    console.log(this.appointment)

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
      console.log(data);
    });
  }
  
}
