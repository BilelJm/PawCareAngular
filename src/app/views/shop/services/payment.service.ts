import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:8080/order';


  // Make payment for an order
  payOrder(orderId: number, userId: number, cardNumber: string, expMonth: string, expYear: string, cvc: string): Observable<any> {
    const url = `${this.baseUrl}/payOrder/${orderId}?idUser=${userId}&card=${cardNumber}&expMonth=${expMonth}&expYear=${expYear}&cvc=${cvc}`;
    return this.http.post(url, {}).pipe(
      map(response => {
        return {success: true, message: (response as any).message};
      })
    );
  }}
