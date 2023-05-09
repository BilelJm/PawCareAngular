import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let TrainigService = class TrainigService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = "http://localhost:8080/training/training";
    }
    getTrainingStatistics() {
        const url = 'http://localhost:8080/training/statistics';
        return this.httpClient.get(url);
    }
    getReportedTrainings() {
        return this.httpClient.get(`http://localhost:8080/training/report`);
    }
    getAllReportes() {
        return this.httpClient.get(`http://localhost:8080/training/allreports`);
    }
    getReportsByTraining(idTraining) {
        return this.httpClient.get(`http://localhost:8080/training/reports/${idTraining}`);
    }
    reportTraining(idTraining, report) {
        const url = `http://localhost:8080/training/report/${idTraining}`;
        return this.httpClient.post(url, report);
    }
    getTrainingsList() {
        return this.httpClient.get(`${this.baseURL}`);
    }
    createTraining(training) {
        return this.httpClient.post(`${this.baseURL}`, training);
    }
    getTrainingById(idTraining) {
        return this.httpClient.get(`${this.baseURL}/${idTraining}`);
    }
    updateTraining(idTraining, training) {
        training.cDate = new Date(training.cDate);
        return this.httpClient.put(`${this.baseURL}/${idTraining}`, training);
    }
    deleteTraining(idTraining) {
        return this.httpClient.delete(`${this.baseURL}/${idTraining}`);
    }
    book(idTraining) {
        return this.httpClient.put(`http://localhost:8080/training/${idTraining}/booking`, {});
    }
};
TrainigService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TrainigService);
export { TrainigService };
//# sourceMappingURL=trainig.service.js.map