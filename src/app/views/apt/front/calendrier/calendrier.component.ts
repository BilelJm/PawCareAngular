import { Component, OnInit, ViewChild } from '@angular/core';
import { EventSettingsModel, ScheduleComponent, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ActionEventArgs, PopupOpenEventArgs } from '@syncfusion/ej2-angular-schedule';
import { AppointmentService } from './appointment.service';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { Pet } from 'src/app/views/admin/apt/back/pet/pet';
import { PetService } from 'src/app/views/admin/apt/back/pet/pet.service';




@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  template:`
  <app-index-navbar></app-index-navbar>
  <div class="main-content">
    <ejs-schedule #scheduleObj [eventSettings]="eventSettings" (actionBegin)="onActionBegin($event)" (popupOpen)="onPopupOpen($event)" [editorTemplate]="editorTemplate"></ejs-schedule>
  </div>
  <app-footer></app-footer>`
})

export class CalendrierComponent implements OnInit {
  @ViewChild('scheduleObj', { static: true }) public scheduleObj!: ScheduleComponent;
  public data: object[] = [];
  private reasonDropdown!: DropDownList | null;
  public notesInput!: HTMLTextAreaElement;
  pets: Pet[] = [];
  petDropdown!: DropDownList;
  public availableDoctors: any[] = [];


  private locationDropdown!: DropDownList | null;

  private doctorDropdown: DropDownList = new DropDownList();

  private startTimePicker!: DateTimePicker | null;
  private endTimePicker!: DateTimePicker | null;
  public selectedDate: Date = new Date();
  public eventSettings: EventSettingsModel = {
    dataSource: this.data,
    fields: {
      subject: { title: 'Reason' },
      location: { title: 'Location' },
      description: { title: 'Notes' },
      isAllDay: { title: 'Pet' },
      recurrenceID: { title: 'Doctor' }

    }
  };

  public editorTemplate: string = '<div class="e-schedule-dialog-template" style="width: 100%">' +
    '<table class="e-schedule-form-table" style="width: 100%; table-layout: fixed;">' +
    '<tbody>' +
    '<tr><td class="e-textlabel">Reason</td>' +
    '<td colspan="4"><input id="reason" /></td></tr>' +
    '<tr><td class="e-textlabel">Location</td>' +
    '<td colspan="4"><input id="location"/></td></tr>' +
    '<tr><td class="e-textlabel">Start Time</td>' +
    '<td colspan="4"><input id="startTime" name="StartTime" /></td></tr>' +
    '<tr><td class="e-textlabel">End Time</td>' +
    '<td colspan="4"><input id="endTime" name="EndTime" /></td></tr>' +
    '<tr><td class="e-textlabel">Notes</td>' +
    '<td colspan="4"><textarea id="notes" name="description" rows="5" cols="45" placeholder="Enter notes..."></textarea></td></tr>' +
    '<tr><td class="e-textlabel">Pet</td>' +
    '<td colspan="4"><input id="pet" /></td></tr>' +
    '<tr><td class="e-textlabel">Doctor</td>' +
    '<td colspan="4"><input id="doctor" /></td></tr>' +
    '</tbody></table></div>';


  constructor(private appointmentService: AppointmentService, private petService: PetService) { }

  ngOnInit(): void {
    this.fetchAppointments();
    this.fetchPets();
  }
  
  

  fetchAppointments(): void {
    this.appointmentService.getAptByUserid().subscribe(
      (appointments) => {
        this.data = appointments.map((appointment: { idAppointment: any; reason: any; startDate: string | number | Date; endDate: string | number | Date; location: number, notes: string,pet:number }) => {
          return {
            Id: appointment.idAppointment,
            Subject: appointment.reason,
            StartTime: new Date(appointment.startDate),
            EndTime: new Date(appointment.endDate),
            Location: appointment.location,
            Description: appointment.notes,
           

          };
        });
        this.eventSettings = { ...this.eventSettings, dataSource: this.data };
      },
      (error) => {
        console.error('Error fetching appointments:', error);
      }
    );
  }

  fetchPets(): void {
    this.petService.getPetsList().subscribe(
      (pets) => {
        this.pets = pets;
      },
      (error) => {
        console.error('Error fetching pets:', error);
      }
    );
  }


  onPopupOpen(args: PopupOpenEventArgs): void {

   


    if (args.type === 'Editor') {
      // Initialize Reason DropDownList
      const reasonInput = args.element.querySelector('#reason');
      const locationInput = args.element.querySelector('#location');
      const petInput = args.element.querySelector('#pet');



      this.reasonDropdown = new DropDownList({
        dataSource: [
          'RoutineCheckup',
          'Vaccination',
          'Surgery',
        ],
        value: args.data ? args.data['Subject'] as string : 'RoutineCheckup', // Set the default value to "RoutineCheckup" if no appointment data is available
        placeholder: 'Choose an option', // Set the placeholder text
      });
      this.reasonDropdown.appendTo(reasonInput as HTMLElement);

      this.locationDropdown = new DropDownList({
        dataSource: [
          'Locally',
          'VeterinaryOffice',
        ],
        value: args.data ? args.data['Location'] as string : 'Locally',
        placeholder: 'Choose an option', // Set the placeholder text

      });

      this.locationDropdown.appendTo(locationInput as HTMLElement);
      const petOptions = this.pets.map((pet: Pet) => ({
        text: pet.name,
        value: pet.idPet,
      }));

      this.petDropdown = new DropDownList({
        dataSource: petOptions,
        fields: { text: 'text', value: 'value' },
        value: args.data && args.data['IsAllDay'] ? args.data['IsAllDay'] as number : this.pets[0]?.idPet,
      });
      this.petDropdown.appendTo(petInput as HTMLElement);

    





      // Initialize Start Time DateTimePicker
      const startTimeInput = args.element.querySelector('#startTime');
      this.startTimePicker = new DateTimePicker({
        value: args.data ? new Date(args.data['StartTime'] as string) : new Date(),
        format: "yyyy-MM-dd'T'HH:mm",
        step: 30
      });
      this.startTimePicker.appendTo(startTimeInput as HTMLElement);

      // Initialize End Time DateTimePicker
      const endTimeInput = args.element.querySelector('#endTime');
      this.endTimePicker = new DateTimePicker({
        value: args.data ? new Date(args.data['EndTime'] as string) : new Date(),
        format: "yyyy-MM-dd'T'HH:mm",
        step: 30
      });
      this.endTimePicker.appendTo(endTimeInput as HTMLElement);

      this.notesInput = args.element.querySelector('#notes') as HTMLTextAreaElement;
      if (this.notesInput) {
        this.notesInput.value = args.data && args.data['Description'] ? args.data['Description'] as string : '';
      }

      const doctorInput = args.element.querySelector('#doctor') as HTMLElement;

      if (doctorInput) {

      const startDate = new Date(this.startTimePicker.value);
      const startDateUtc = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000);
      const startDateString = startDateUtc.toISOString().slice(0, 16);

      const endDate = new Date(this.endTimePicker.value);
      const endDateUtc = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000);
      const endDateString = endDateUtc.toISOString().slice(0, 16);


      this.appointmentService.getDoctors(startDateString, endDateString).subscribe((doctors: any[]) => {
        this.availableDoctors = doctors;
        this.doctorDropdown = new DropDownList({
          dataSource: this.availableDoctors,
          fields: { text: 'username', value: 'id' },
          placeholder: 'Select a doctor',
        });
        this.doctorDropdown.appendTo(doctorInput);
         this.startTimePicker?.addEventListener('change', () => this.updateDoctorDropdown());
         this.endTimePicker?.addEventListener('change', () => this.updateDoctorDropdown());
      });

      if (args.data) {
        {
          const appointmentId = args.data['Id'];
          this.appointmentService.getDoctorByAppointmentId(appointmentId).subscribe((doctor: any) => {
            // Add the new doctor to the availableDoctors array
            this.availableDoctors.push(doctor);
            // Re-assign the availableDoctors array to the doctorDropdown control
            this.doctorDropdown!.dataSource = this.availableDoctors;
            // Set the selected value of the doctor dropdown to the doctor ID
            this.doctorDropdown!.value = doctor.id;
          });
        }
      }
    }
  }
}

  updateDoctorDropdown(): void {
   
    //const doctorInput = document.querySelector('#doctor') as HTMLElement;
    const startDate = new Date(this.startTimePicker!.value);
    const startDateUtc = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000);
    const startDateString = startDateUtc.toISOString().slice(0, 16);
  
    const endDate = new Date(this.endTimePicker!.value);
    const endDateUtc = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000);
    const endDateString = endDateUtc.toISOString().slice(0, 16);
  
    this.appointmentService.getDoctors(startDateString, endDateString).subscribe((doctors: any[]) => {
      this.availableDoctors = doctors;
      this.doctorDropdown!.dataSource = this.availableDoctors;
      this.doctorDropdown!.value = '';
    });
  }

  onActionBegin(args: ActionEventArgs): void {

    const currentDate = new Date();
    const dayAhead = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);

    if (args.requestType === 'eventCreate') {
      const eventData = args.data instanceof Array ? args.data[0] : args.data;
      if (eventData) {

        const formatDate = (date: Date): string => {
          const pad = (n: number) => (n < 10 ? '0' + n : n);
          const y = date.getFullYear();
          const m = pad(date.getMonth() + 1);
          const d = pad(date.getDate());
          const h = pad(date.getHours());
          const min = pad(date.getMinutes());
          return `${y}-${m}-${d}T${h}:${min}`;
        };
        const appointmentData = {
          startDate: formatDate(this.startTimePicker?.value as Date),
          endDate: formatDate(this.endTimePicker?.value as Date),
          reason: this.reasonDropdown?.value as number,
          location: this.locationDropdown?.value as number,
          notes: this.notesInput.value,
          prix: 0,
          idAppointment: 0,
          pet: { idPet: this.petDropdown?.value as number },
          doctor: { id: this.doctorDropdown?.value as number },
        };

        console.log(appointmentData);

        this.appointmentService.createAppointment(appointmentData).subscribe((response) => {
          console.log('Appointment saved:', response);
          this.data.push({
            Id: response.idAppointment,
            Subject: response.reason,
            StartTime: new Date(response.startDate.toString()),
            EndTime: new Date(response.endDate.toString()),
            Location: response.location,

          });
          this.scheduleObj.refresh();
          this.fetchAppointments();
        });

      }
    }

    

    
    if (args.requestType === 'eventChange') {


      const eventData = args.data instanceof Array ? args.data[0] : args.data;
      if (eventData) {

        const eventStartDate = new Date(eventData['StartTime']);

        const formatDate = (date: Date): string => {
          const pad = (n: number) => (n < 10 ? '0' + n : n);
          const y = date.getFullYear();
          const m = pad(date.getMonth() + 1);
          const d = pad(date.getDate());
          const h = pad(date.getHours());
          const min = pad(date.getMinutes());
          return `${y}-${m}-${d}T${h}:${min}`;
        };
        const appointmentData = {
          startDate: formatDate(this.startTimePicker?.value as Date),
          endDate: formatDate(this.endTimePicker?.value as Date),
          reason: this.reasonDropdown?.value as number,
          location: this.locationDropdown?.value as number,
          notes: this.notesInput.value,
          prix: 0,
          idAppointment: eventData['Id'],
          pet: { idPet: this.petDropdown?.value as number },
          doctor: { id: this.doctorDropdown?.value as number },

        };
        if (eventStartDate >= dayAhead) {
        this.appointmentService.updateAppointment(eventData['Id'], appointmentData).subscribe((response) => {
          console.log('Appointment updated:', response);

          const index = this.data.findIndex((event) => (event as { Id: any }).Id === eventData['Id']);
          if (index !== -1) {
            this.data[index] = {
              ...this.data[index],
              Subject: response.reason,
              StartTime: new Date(response.startDate.toString()),
              EndTime: new Date(response.endDate.toString()),
              Location: response.location,
              Description: response.notes,
              pet: { idPet: this.petDropdown?.value as number },
              doctor: { id: this.doctorDropdown?.value as number },

            };
            this.scheduleObj.refresh();
          }
        });
      } else {
        alert("You can only update or delete an appointment with a start date 24 hours ahead.");
        args.cancel = true; // Cancel the event action
      }
      }
    }

    if (args.requestType === 'eventRemove') {
      const eventData = args.data instanceof Array ? args.data[0] : args.data;
      if (eventData) {

        const eventStartDate = new Date(eventData['StartTime']);

        const eventId = (eventData as { Id: any }).Id;
        if (eventStartDate >= dayAhead) {
        this.appointmentService.deleteAppointment(eventId).subscribe(
          () => {
            console.log('Appointment deleted:', eventId);
          },
          (error) => {
            console.error('Error deleting appointment:', error);
          }
        );
      } else {
        alert("You can only update or delete an appointment with a start date 24 hours ahead.");
        args.cancel = true; // Cancel the event action
      }
      }
    }

  }


}
