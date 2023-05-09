import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Pet } from '../../pet/pet';
import { Appointment } from '../appointment';
import { User } from '../user';
let AppointmentUpdateComponent = class AppointmentUpdateComponent {
    constructor(appointmentService, route, router, petService, userService, toastr) {
        this.appointmentService = appointmentService;
        this.route = route;
        this.router = router;
        this.petService = petService;
        this.userService = userService;
        this.toastr = toastr;
        this.pets = [];
        this.users = [];
        this.appointment = new Appointment();
        this._color = "light";
        this.appointment.pet = new Pet();
        this.appointment.doctor = new User();
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    ngOnInit() {
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
    onSubmit() {
        this.appointmentService.updateAppointment(this.id, this.appointment).subscribe(data => {
            this.toastr.success('Appointment updated successfully.', 'Success');
            this.goToAppointmentList();
        }, error => {
            this.toastr.error('An error has occured.', 'Error');
            console.log(error);
        });
        console.log(this.appointment);
    }
    goToAppointmentList() {
        this.router.navigate(['/admin/appointment']);
    }
    getPets() {
        this.petService.getPetsList().subscribe(data => {
            this.pets = data;
        });
    }
    getAllDoctors() {
        this.userService.getAllDoctors().subscribe(data => {
            this.users = data;
            console.log(data);
        });
    }
};
__decorate([
    Input()
], AppointmentUpdateComponent.prototype, "color", null);
AppointmentUpdateComponent = __decorate([
    Component({
        selector: 'app-appointment-update',
        templateUrl: './appointment-update.component.html',
        styleUrls: ['./appointment-update.component.css']
    })
], AppointmentUpdateComponent);
export { AppointmentUpdateComponent };
//# sourceMappingURL=appointment-update.component.js.map