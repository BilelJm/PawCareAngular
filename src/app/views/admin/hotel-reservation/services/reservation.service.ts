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

  getHotellist(): Observable<Reservation[]>{
    return this.httpClient.get<Reservation[]> (`${this.baseUrl+"all"}`);
  }
}
