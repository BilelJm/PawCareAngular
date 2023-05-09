import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ReportTraining, Training } from './training';

@Injectable({
  providedIn: 'root'
})
export class TrainigService {

  private baseURL = "http://localhost:8080/training/training";
  constructor(private httpClient: HttpClient) { }
  
  

  getTrainingStatistics() {
    const url = 'http://localhost:8080/training/statistics';
    return this.httpClient.get<Map<string, number>>(url);
  }

  getReportedTrainings(): Observable<Training[]> {
    return this.httpClient.get<Training[]>(`http://localhost:8080/training/report`);
  }

  getAllReportes(): Observable<ReportTraining[]> {
    return this.httpClient.get<ReportTraining[]>(`http://localhost:8080/training/allreports`);
  }

  getReportsByTraining(idTraining: number): Observable<ReportTraining[]> {
    return this.httpClient.get<ReportTraining[]>(`http://localhost:8080/training/reports/${idTraining}`);
  }

  reportTraining(idTraining: number, report: string) {
    const url = `http://localhost:8080/training/report/${idTraining}`;
    return this.httpClient.post(url, report);
  }

  
  getTrainingsList(): Observable<Training[]>{
    return this.httpClient.get<Training[]>(`${this.baseURL}`);
  }

  
  createTraining(training: Training): Observable<Object>{  
    return this.httpClient.post(`${this.baseURL}`, training);
    
  }

  getTrainingById(idTraining: number): Observable<Training>{
    return this.httpClient.get<Training>(`${this.baseURL}/${idTraining}`);
  }

  updateTraining(idTraining: number, training: Training): Observable<Object>{
    training.cDate = new Date(training.cDate);
    return this.httpClient.put(`${this.baseURL}/${idTraining}`, training);
  }

  deleteTraining(idTraining: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idTraining}`);
  }



  
  book(idTraining: number,IdPet:number): Observable<any> {
    return this.httpClient.post(`http://localhost:8080/training/${IdPet}/${idTraining}/booking`, {});
  }
  
  


  
}
