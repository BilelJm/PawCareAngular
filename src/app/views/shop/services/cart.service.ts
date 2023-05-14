import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cart} from "../models/cart";
import {Observable} from "rxjs";
import {Order} from "../models/order";
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl: string = "http://localhost:8080/";

  constructor(private http:HttpClient) { }


  public addAccessoryToCart(idAccessory:number , idCart:number)
  {

    return this.http.put(`${this.baseUrl}cart/addAccessoryToCart/${idAccessory}/${idCart}`, null);

  }
  public removeAccessoryFromCart(idAccessory:number , idCart:number)
  {
    return this.http.delete(`${this.baseUrl}cart/removeAccessoryFromCart/${idAccessory}/${idCart}`);

  }

  public GetCartById(idCart:number): Observable<Cart> {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiaWxlbGptIiwiaWF0IjoxNjgzNTc0NjkwLCJleHAiOjE2ODM2NjEwOTB9.M-CRNoLxEXLmL03SOFTiTGEygv2GW04cB8LVuBmIrFE"'
    });
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    
    return this.http.get<Cart>(`${this.baseUrl}cart/getCartById/${idCart}`,{headers:headers});

  }
  emptyCart(cartId: number): Observable<any> {
    const url = `${this.baseUrl}cart/${cartId}/emptyCart`;
    return this.http.delete(url);
  }

  createOrderFromCart(idCart: number, userId: number): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}order/createOrder/${idCart}/${userId}`, null);
  }

}
