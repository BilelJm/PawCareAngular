import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = "http://localhost:8080/api/auth/appointment/";

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<any> {
    return this.http.get(this.apiUrl+"all");
  }

  createAppointment(appointmentData: object): Observable<any> {
    return this.http.post<any>(this.apiUrl+"addAppointment", appointmentData);
  }

  updateAppointment(id: number, appointment: object): Observable<any>{
    return this.http.put(`${this.apiUrl+"updateAppointment/"}${id}`, appointment);
  }
  deleteAppointment(id: number): Observable<Object>{
    return this.http.delete(`${this.apiUrl+"deleteAppointment/"}${id}`);
  }

  getAptByUserid(id:number):Observable<any>{
    return this.http.get(`${this.apiUrl+"getAppointmentsByUserId"}/${id}`);
  }

  
  getDoctors(startDate: String, endDate: String): Observable<any> {
    const url = `http://localhost:8080/api/auth/findAvailableDoctors/${startDate}/${endDate}`;
    return this.http.get(url);
  }
  getDoctorByAppointmentId(id: number): Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/GetDoctorByAptId/${id}`);
  }
  getIdByUsername(username:String): Observable<number>
  {
    return this.http.get<number>(`http://localhost:8080/api/auth/getUserIdbyUsername/${username}`);

  }

}
