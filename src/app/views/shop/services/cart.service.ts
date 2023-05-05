import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cart} from "../models/cart";
import {Observable} from "rxjs";
import {Order} from "../models/order";
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
    return this.http.get<Cart>(`${this.baseUrl}cart/getCartById/${idCart}`);

  }
  emptyCart(cartId: number): Observable<any> {
    const url = `${this.baseUrl}cart/${cartId}/emptyCart`;
    return this.http.delete(url);
  }

  createOrderFromCart(idCart: number, userId: number): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}order/createOrder/${idCart}/${userId}`, null);
  }

}
