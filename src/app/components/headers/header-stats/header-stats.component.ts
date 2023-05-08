import { Component, OnInit } from "@angular/core";
import { AppointmentService } from "src/app/views/admin/apt/back/appointment/appointment.service";
import { PetService } from "src/app/views/admin/apt/back/pet/pet.service";

@Component({
  selector: "app-header-stats",
  templateUrl: "./header-stats.component.html",
})
export class HeaderStatsComponent implements OnInit {
  petNumber: number = 0;
  appointmentNumber:number=0;
  constructor(private petService: PetService,private appointmentService:AppointmentService) {}

  ngOnInit(): void {
    this.petService.GetPetsNumber().subscribe(
      data => {
        this.petNumber = data;
      },
      error => console.log(error)
    );

    this.appointmentService.GetAppointmentsNumber().subscribe(
      data => {
        this.appointmentNumber = data;
      },
      error => console.log(error)
    );
  }
}
