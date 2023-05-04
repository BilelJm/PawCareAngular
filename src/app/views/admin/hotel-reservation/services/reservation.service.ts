import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl="http://localhost:8080/reservation/";
  constructor(private httpClient : HttpClient) { }

  getreservationlist(): Observable<Reservation[]>{
    return this.httpClient.get<Reservation[]> (`${this.baseUrl+"all"}`);
  }
  createReservation(reservation: Reservation): Observable<Object>{
    const data=new FormData();
    
    
    return this.httpClient.post(`${this.baseUrl+"addreservation"}`,reservation);
  }
  deleteReservation(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl+"deletereservation/"}${id}`);
  }
  updateReservation(id: number, reservation: Reservation): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl+"updatereservation/"}${id}`, reservation);
  }
  getReservationById(id: number): Observable<Reservation>{
    return this.httpClient.get<Reservation>(`${this.baseUrl+"findreservationby/"}${id}`);
  }
}
