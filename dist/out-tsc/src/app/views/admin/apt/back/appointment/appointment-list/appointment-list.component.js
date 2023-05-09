import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Pet } from '../../pet/pet';
import { User } from '../user';
let AppointmentListComponent = class AppointmentListComponent {
    constructor(appointmentSerice, router, toastr) {
        this.appointmentSerice = appointmentSerice;
        this.router = router;
        this.toastr = toastr;
        this._color = "light";
        this.searchQuery = ''; // add this property to the component
        this.appointments = [];
        this.p = 1;
        this.currentPage = 1;
        this.pet = new Pet();
        this.user = new User();
        this.name = '';
        this.key = 'idAppointment';
        this.reverse = false;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    ngOnInit() {
        this.getAppointments();
    }
    getAppointments() {
        this.appointmentSerice.getAppointmentsList().subscribe(data => {
            this.appointments = data;
        });
    }
    updateAppointment(id) {
        this.router.navigate(['/admin/update-appointment', id]);
    }
    deleteAppointment(id) {
        this.appointmentSerice.deleteAppointment(id).subscribe(data => {
            this.toastr.success('Appointment deleted successfully.', 'Success');
            this.getAppointments();
        }, error => console.log(error));
    }
    goToAppointmentList() {
        this.router.navigate(['/admin/appointment']);
    }
    appointmentDetails() {
        this.router.navigate(['/admin/create-appoitment']);
    }
    Search() {
        if (this.name == "") {
            console.log(this.name);
            this.ngOnInit();
        }
        else {
            console.log(this.name);
            this.appointments = this.appointments.filter(res => {
                return res.pet.name.toLowerCase().includes(this.name.toLowerCase());
            });
        }
    }
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
};
__decorate([
    Input()
], AppointmentListComponent.prototype, "color", null);
AppointmentListComponent = __decorate([
    Component({
        selector: 'app-appointment-list',
        templateUrl: './appointment-list.component.html',
        styleUrls: ['./appointment-list.component.css']
    })
], AppointmentListComponent);
export { AppointmentListComponent };
//# sourceMappingURL=appointment-list.component.js.map