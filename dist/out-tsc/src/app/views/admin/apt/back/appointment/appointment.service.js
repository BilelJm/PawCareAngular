import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AppointmentService = class AppointmentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = "http://localhost:8080/api/auth/appointment/";
        this.options = {
            withCredentials: true
        };
    }
    getAppointmentsList() {
        return this.httpClient.get(`${this.baseURL + "all"}`, this.options);
    }
    createAppointment(appointment) {
        return this.httpClient.post(`${this.baseURL + "addAppointment"}`, appointment, this.options);
    }
    getAppointmentById(id) {
        return this.httpClient.get(`${this.baseURL + "GetAppointment/"}${id}`);
    }
    updateAppointment(id, appointment) {
        return this.httpClient.put(`${this.baseURL + "updateAppointment/"}${id}`, appointment);
    }
    deleteAppointment(id) {
        return this.httpClient.delete(`${this.baseURL + "deleteAppointment/"}${id}`);
    }
    searchAppointment(name) {
        return this.httpClient.get(`${this.baseURL + "GetAppointmentByPet/"}${name}`);
    }
    GetAppointmentsNumber() {
        return this.httpClient.get(`${this.baseURL}GetPetsNumberAddedLast24`);
    }
};
AppointmentService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AppointmentService);
export { AppointmentService };
//# sourceMappingURL=appointment.service.js.map