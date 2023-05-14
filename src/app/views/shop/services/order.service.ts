import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../models/order";
import {Accessory} from "../models/accessory";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  
  private baseUrl = 'http://localhost:8080/order';

  constructor(private http: HttpClient) {
  }


  getItemById(id: number): Observable<Order> {
    const url = `${this.baseUrl}/GetOrderById/${id}`;
    return this.http.get<Order>(url);
  }

  getAccessoriesByOrderId(orderId: number): Observable<Accessory[]> {
    const url = `${this.baseUrl}/${orderId}/accessories`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiaWxlbGptIiwiaWF0IjoxNjgzNTc0NjkwLCJleHAiOjE2ODM2NjEwOTB9.M-CRNoLxEXLmL03SOFTiTGEygv2GW04cB8LVuBmIrFE"'
    });
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    
    return this.http.get<Accessory[]>(url, {headers:headers});
  }

  getUserByOrderId(orderId: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${orderId}/user`);
  }
  downloadBillPdf(itemId: number): Observable<ArrayBuffer> {
    const headers = new HttpHeaders().set('Accept', 'application/pdf');
    return this.http.get(`${this.baseUrl}/bill/${itemId}`, { headers, responseType: 'arraybuffer' });
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/itemslist`);
  }
  getPaidOrders() {
    return this.http.get<any[]>(`${this.baseUrl}/paid`);
  }

  getNotPaidOrders() {
    return this.http.get<any[]>(`${this.baseUrl}/notpaid`);
  }

}
