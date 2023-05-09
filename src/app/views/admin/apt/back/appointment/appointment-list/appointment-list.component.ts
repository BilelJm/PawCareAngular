import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../../pet/pet';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {


  
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  searchQuery: string = ''; // add this property to the component
  appointments: Appointment[] = []; 
  p:number=1;
  currentPage:number=1;
  pet:Pet=new Pet();
  user:User=new User();

  name: string='';


constructor(private appointmentSerice:AppointmentService,private router: Router, private toastr: ToastrService){}

  ngOnInit(): void {
    this.getAppointments();
  }
private getAppointments()
  {
    this.appointmentSerice.getAppointmentsList().subscribe(data=> {
      this.appointments=data;
    });
  }

  updateAppointment(id: number){
    this.router.navigate(['/admin/update-appointment', id]);
  }

  deleteAppointment(id: number){
    this.appointmentSerice.deleteAppointment(id).subscribe( data => {
      this.toastr.success('Appointment deleted successfully.', 'Success');
      this.getAppointments();
    },
    error => console.log(error));
  
  }

  goToAppointmentList(){
    this.router.navigate(['/admin/appointment']);
  }
  appointmentDetails(){
    this.router.navigate(['/admin/create-appoitment']);
  }
  
  Search() {
    if (this.name=="") {
      console.log(this.name);
      this.ngOnInit();
    } else {
      console.log(this.name);
      this.appointments = this.appointments.filter(res => {
       return res.pet.name.toLowerCase().includes(this.name.toLowerCase())
    });
    }
  }

  key='idAppointment';
  reverse:boolean=false;
  sort(key)
  {
    this.key=key;
    this.reverse=!this.reverse;
  }

}