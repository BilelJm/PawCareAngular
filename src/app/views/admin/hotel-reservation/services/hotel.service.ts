import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotels } from '../hotels';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private baseUrl="http://localhost:8080/hotel/";
  constructor(private httpClient : HttpClient) { }
  getHotellist(): Observable<Hotels[]>{
    return this.httpClient.get<Hotels[]> (`${this.baseUrl+"all"}`);
  }
  createHotel(hotels: Hotels,image: File): Observable<Object>{
    const data=new FormData();
    data.append('hotel', JSON.stringify(hotels));
    data.append('image', image, image.name);
    return this.httpClient.post(`${this.baseUrl+"addHotel"}`,data);
  }
  deleteHotel(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl+"deleteHotel/"}${id}`);
  }
  getHotelById(id: number): Observable<Hotels>{
    return this.httpClient.get<Hotels>(`${this.baseUrl+"findHotel/"}${id}`);
  }
  updateHotel(id: number, hotel: Hotels): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl+"updateHotel/"}${id}`, hotel);
  }
  
}
