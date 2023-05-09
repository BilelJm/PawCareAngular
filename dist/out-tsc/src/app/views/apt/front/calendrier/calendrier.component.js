import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
let CalendrierComponent = class CalendrierComponent {
    constructor(appointmentService, petService, storageService) {
        this.appointmentService = appointmentService;
        this.petService = petService;
        this.storageService = storageService;
        this.data = [];
        this.pets = [];
        this.availableDoctors = [];
        this.doctorDropdown = new DropDownList();
        this.selectedDate = new Date();
        this.eventSettings = {
            dataSource: this.data,
            fields: {
                subject: { title: 'Reason' },
                location: { title: 'Location' },
                description: { title: 'Notes' },
                isAllDay: { title: 'Pet' },
                recurrenceID: { title: 'Doctor' }
            }
        };
        this.editorTemplate = '<div class="e-schedule-dialog-template" style="width: 100%">' +
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
    }
    ngOnInit() {
        this.fetchAppointments();
        this.fetchPets();
        const user = this.storageService.getUser();
        console.log('User object:', user);
    }
    fetchAppointments() {
        this.appointmentService.getAptByUserid(this.storageService.getUser().id).subscribe((appointments) => {
            this.data = appointments.map((appointment) => {
                return {
                    Id: appointment.idAppointment,
                    Subject: appointment.reason,
                    StartTime: new Date(appointment.startDate),
                    EndTime: new Date(appointment.endDate),
                    Location: appointment.location,
                    Description: appointment.notes,
                };
            });
            this.eventSettings = Object.assign(Object.assign({}, this.eventSettings), { dataSource: this.data });
        }, (error) => {
            console.error('Error fetching appointments:', error);
        });
    }
    fetchPets() {
        this.petService.getPetsList().subscribe((pets) => {
            this.pets = pets;
        }, (error) => {
            console.error('Error fetching pets:', error);
        });
    }
    onPopupOpen(args) {
        var _a;
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
                    'Adoption',
                    'Training',
                    'Hotel_Reservation',
                ],
                value: args.data ? args.data['Subject'] : 'RoutineCheckup',
                placeholder: 'Choose an option', // Set the placeholder text
            });
            this.reasonDropdown.appendTo(reasonInput);
            this.locationDropdown = new DropDownList({
                dataSource: [
                    'Locally',
                    'VeterinaryOffice',
                ],
                value: args.data ? args.data['Location'] : 'Locally',
                placeholder: 'Choose an option', // Set the placeholder text
            });
            this.locationDropdown.appendTo(locationInput);
            const petOptions = this.pets.map((pet) => ({
                text: pet.name,
                value: pet.idPet,
            }));
            this.petDropdown = new DropDownList({
                dataSource: petOptions,
                fields: { text: 'text', value: 'value' },
                value: args.data && args.data['IsAllDay'] ? args.data['IsAllDay'] : (_a = this.pets[0]) === null || _a === void 0 ? void 0 : _a.idPet,
            });
            this.petDropdown.appendTo(petInput);
            // Initialize Start Time DateTimePicker
            const startTimeInput = args.element.querySelector('#startTime');
            this.startTimePicker = new DateTimePicker({
                value: args.data ? new Date(args.data['StartTime']) : new Date(),
                format: "yyyy-MM-dd'T'HH:mm",
                step: 30
            });
            this.startTimePicker.appendTo(startTimeInput);
            // Initialize End Time DateTimePicker
            const endTimeInput = args.element.querySelector('#endTime');
            this.endTimePicker = new DateTimePicker({
                value: args.data ? new Date(args.data['EndTime']) : new Date(),
                format: "yyyy-MM-dd'T'HH:mm",
                step: 30
            });
            this.endTimePicker.appendTo(endTimeInput);
            this.notesInput = args.element.querySelector('#notes');
            if (this.notesInput) {
                this.notesInput.value = args.data && args.data['Description'] ? args.data['Description'] : '';
            }
            const doctorInput = args.element.querySelector('#doctor');
            if (doctorInput) {
                const startDate = new Date(this.startTimePicker.value);
                const startDateUtc = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000);
                const startDateString = startDateUtc.toISOString().slice(0, 16);
                const endDate = new Date(this.endTimePicker.value);
                const endDateUtc = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000);
                const endDateString = endDateUtc.toISOString().slice(0, 16);
                this.appointmentService.getDoctors(startDateString, endDateString).subscribe((doctors) => {
                    var _a, _b;
                    this.availableDoctors = doctors;
                    this.doctorDropdown = new DropDownList({
                        dataSource: this.availableDoctors,
                        fields: { text: 'username', value: 'id' },
                        placeholder: 'Select a doctor',
                    });
                    this.doctorDropdown.appendTo(doctorInput);
                    (_a = this.startTimePicker) === null || _a === void 0 ? void 0 : _a.addEventListener('change', () => this.updateDoctorDropdown());
                    (_b = this.endTimePicker) === null || _b === void 0 ? void 0 : _b.addEventListener('change', () => this.updateDoctorDropdown());
                });
                if (args.data) {
                    {
                        const appointmentId = args.data['Id'];
                        this.appointmentService.getDoctorByAppointmentId(appointmentId).subscribe((doctor) => {
                            // Add the new doctor to the availableDoctors array
                            this.availableDoctors.push(doctor);
                            // Re-assign the availableDoctors array to the doctorDropdown control
                            this.doctorDropdown.dataSource = this.availableDoctors;
                            // Set the selected value of the doctor dropdown to the doctor ID
                            this.doctorDropdown.value = doctor.id;
                        });
                    }
                }
            }
        }
    }
    updateDoctorDropdown() {
        //const doctorInput = document.querySelector('#doctor') as HTMLElement;
        const startDate = new Date(this.startTimePicker.value);
        const startDateUtc = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000);
        const startDateString = startDateUtc.toISOString().slice(0, 16);
        const endDate = new Date(this.endTimePicker.value);
        const endDateUtc = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000);
        const endDateString = endDateUtc.toISOString().slice(0, 16);
        this.appointmentService.getDoctors(startDateString, endDateString).subscribe((doctors) => {
            this.availableDoctors = doctors;
            this.doctorDropdown.dataSource = this.availableDoctors;
            this.doctorDropdown.value = '';
        });
    }
    onActionBegin(args) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const currentDate = new Date();
        const dayAhead = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
        if (args.requestType === 'eventCreate') {
            const eventData = args.data instanceof Array ? args.data[0] : args.data;
            if (eventData) {
                const formatDate = (date) => {
                    const pad = (n) => (n < 10 ? '0' + n : n);
                    const y = date.getFullYear();
                    const m = pad(date.getMonth() + 1);
                    const d = pad(date.getDate());
                    const h = pad(date.getHours());
                    const min = pad(date.getMinutes());
                    return `${y}-${m}-${d}T${h}:${min}`;
                };
                const appointmentData = {
                    startDate: formatDate((_a = this.startTimePicker) === null || _a === void 0 ? void 0 : _a.value),
                    endDate: formatDate((_b = this.endTimePicker) === null || _b === void 0 ? void 0 : _b.value),
                    reason: (_c = this.reasonDropdown) === null || _c === void 0 ? void 0 : _c.value,
                    location: (_d = this.locationDropdown) === null || _d === void 0 ? void 0 : _d.value,
                    notes: this.notesInput.value,
                    prix: 0,
                    idAppointment: 0,
                    pet: { idPet: (_e = this.petDropdown) === null || _e === void 0 ? void 0 : _e.value },
                    doctor: { id: (_f = this.doctorDropdown) === null || _f === void 0 ? void 0 : _f.value },
                    user: { id: this.storageService.getUser().id },
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
                const formatDate = (date) => {
                    const pad = (n) => (n < 10 ? '0' + n : n);
                    const y = date.getFullYear();
                    const m = pad(date.getMonth() + 1);
                    const d = pad(date.getDate());
                    const h = pad(date.getHours());
                    const min = pad(date.getMinutes());
                    return `${y}-${m}-${d}T${h}:${min}`;
                };
                const appointmentData = {
                    startDate: formatDate((_g = this.startTimePicker) === null || _g === void 0 ? void 0 : _g.value),
                    endDate: formatDate((_h = this.endTimePicker) === null || _h === void 0 ? void 0 : _h.value),
                    reason: (_j = this.reasonDropdown) === null || _j === void 0 ? void 0 : _j.value,
                    location: (_k = this.locationDropdown) === null || _k === void 0 ? void 0 : _k.value,
                    notes: this.notesInput.value,
                    prix: 0,
                    idAppointment: eventData['Id'],
                    pet: { idPet: (_l = this.petDropdown) === null || _l === void 0 ? void 0 : _l.value },
                    doctor: { id: (_m = this.doctorDropdown) === null || _m === void 0 ? void 0 : _m.value },
                    user: { id: this.storageService.getUser().id },
                };
                if (eventStartDate >= dayAhead) {
                    this.appointmentService.updateAppointment(eventData['Id'], appointmentData).subscribe((response) => {
                        var _a, _b;
                        console.log('Appointment updated:', response);
                        const index = this.data.findIndex((event) => event.Id === eventData['Id']);
                        if (index !== -1) {
                            this.data[index] = Object.assign(Object.assign({}, this.data[index]), { Subject: response.reason, StartTime: new Date(response.startDate.toString()), EndTime: new Date(response.endDate.toString()), Location: response.location, Description: response.notes, pet: { idPet: (_a = this.petDropdown) === null || _a === void 0 ? void 0 : _a.value }, doctor: { id: (_b = this.doctorDropdown) === null || _b === void 0 ? void 0 : _b.value } });
                            this.scheduleObj.refresh();
                        }
                    });
                }
                else {
                    alert("You can only update or delete an appointment with a start date 24 hours ahead.");
                    args.cancel = true; // Cancel the event action
                }
            }
        }
        if (args.requestType === 'eventRemove') {
            const eventData = args.data instanceof Array ? args.data[0] : args.data;
            if (eventData) {
                const eventStartDate = new Date(eventData['StartTime']);
                const eventId = eventData.Id;
                if (eventStartDate >= dayAhead) {
                    this.appointmentService.deleteAppointment(eventId).subscribe(() => {
                        console.log('Appointment deleted:', eventId);
                    }, (error) => {
                        console.error('Error deleting appointment:', error);
                    });
                }
                else {
                    alert("You can only update or delete an appointment with a start date 24 hours ahead.");
                    args.cancel = true; // Cancel the event action
                }
            }
        }
    }
};
__decorate([
    ViewChild('scheduleObj', { static: true })
], CalendrierComponent.prototype, "scheduleObj", void 0);
CalendrierComponent = __decorate([
    Component({
        selector: 'app-root',
        providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
        template: `
  <app-index-navbar></app-index-navbar>
  <div class="main-content">
    <ejs-schedule #scheduleObj [eventSettings]="eventSettings" (actionBegin)="onActionBegin($event)" (popupOpen)="onPopupOpen($event)" [editorTemplate]="editorTemplate"></ejs-schedule>
  </div>
  <app-footer></app-footer>`
    })
], CalendrierComponent);
export { CalendrierComponent };
//# sourceMappingURL=calendrier.component.js.map