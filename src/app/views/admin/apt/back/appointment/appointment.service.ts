import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseURL="http://localhost:8080/api/auth/appointment/"
  private options = {
    withCredentials: true
  };
  constructor(private httpClient:HttpClient) { }
  getAppointmentsList(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseURL + "all"}`, this.options);
  }

  createAppointment(appointment: Appointment): Observable<Object> {
    return this.httpClient.post(`${this.baseURL + "addAppointment"}`, appointment, this.options);
  }
  getAppointmentById(id: number): Observable<Appointment>{
    return this.httpClient.get<Appointment>(`${this.baseURL+"GetAppointment/"}${id}`);
  }

  updateAppointment(id: number, appointment: Appointment): Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"updateAppointment/"}${id}`, appointment);
  }

  deleteAppointment(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL+"deleteAppointment/"}${id}`);
  }

  searchAppointment(name:String):Observable<Appointment[]>
  {
    return this.httpClient.get<Appointment[]>(`${this.baseURL+"GetAppointmentByPet/"}${name}`);
  }

  GetAppointmentsNumber(): Observable<number> {
    return this.httpClient.get<number>(`${this.baseURL}GetPetsNumberAddedLast24`);
  }

}

