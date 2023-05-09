import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AppointmentService = class AppointmentService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "http://localhost:8080/api/auth/appointment/";
    }
    getAppointments() {
        return this.http.get(this.apiUrl + "all");
    }
    createAppointment(appointmentData) {
        return this.http.post(this.apiUrl + "addAppointment", appointmentData);
    }
    updateAppointment(id, appointment) {
        return this.http.put(`${this.apiUrl + "updateAppointment/"}${id}`, appointment);
    }
    deleteAppointment(id) {
        return this.http.delete(`${this.apiUrl + "deleteAppointment/"}${id}`);
    }
    getAptByUserid(id) {
        return this.http.get(`${this.apiUrl + "getAppointmentsByUserId"}/${id}`);
    }
    getDoctors(startDate, endDate) {
        const url = `http://localhost:8080/api/auth/findAvailableDoctors/${startDate}/${endDate}`;
        return this.http.get(url);
    }
    getDoctorByAppointmentId(id) {
        return this.http.get(`http://localhost:8080/api/auth/GetDoctorByAptId/${id}`);
    }
    getIdByUsername(username) {
        return this.http.get(`http://localhost:8080/api/auth/getUserIdbyUsername/${username}`);
    }
};
AppointmentService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AppointmentService);
export { AppointmentService };
//# sourceMappingURL=appointment.service.js.map