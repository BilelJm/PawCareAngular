import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Pet } from '../../pet/pet';
import { Appointment } from '../appointment';
import { User } from '../user';
let AppointmentAddComponent = class AppointmentAddComponent {
    constructor(appointmentService, router, petService, userService, toastr) {
        this.appointmentService = appointmentService;
        this.router = router;
        this.petService = petService;
        this.userService = userService;
        this.toastr = toastr;
        this.appointment = new Appointment();
        this.pets = [];
        this.users = [];
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
        this.getPets();
        this.getAllDoctors();
    }
    saveAppointment() {
        this.appointmentService.createAppointment(this.appointment).subscribe(data => {
            this.toastr.success('Appointment saved successfully.', 'Success');
            console.log(data);
            this.goToAppointmentList();
        }, error => {
            this.toastr.success('Error has occured.', 'Success');
            console.log(error);
        });
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
            console.log(this.users);
        });
    }
    onSubmit() {
        console.log(this.appointment);
        this.saveAppointment();
    }
};
__decorate([
    Input()
], AppointmentAddComponent.prototype, "color", null);
AppointmentAddComponent = __decorate([
    Component({
        selector: 'app-appointment-add',
        templateUrl: './appointment-add.component.html',
        styleUrls: ['./appointment-add.component.css']
    })
], AppointmentAddComponent);
export { AppointmentAddComponent };
//# sourceMappingURL=appointment-add.component.js.map