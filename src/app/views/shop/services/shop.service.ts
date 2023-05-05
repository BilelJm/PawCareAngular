import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient,HttpParams} from "@angular/common/http";
import { Accessory } from '../models/accessory';
@Injectable({
  providedIn: 'root'
})
export class ShopService {


  constructor(private http:HttpClient) {
  }
  public getAccessories(page: number, size: number, sortField: string, sortDir: string) {
    const params = new HttpParams()
      .set('page', String(page))
      .set('size', String(size))
      .set('sortField', sortField)
      .set('sortDir', sortDir);
    return this.http.get<any>('http://localhost:8080/accessory/listaccessories', { params });
  }
  public searchAccessories(name?: string, price?: number): Observable<Accessory[]> {
    console.log('name:', name);
    console.log('price:', price);
    let url = `http://localhost:8080/accessory/searchAccessories`;
    if (name && price) {
      url += `?name=${name}&price=${price}`;
    } else if (name) {
      url += `?name=${name}`;
    } else if (price) {
      url += `?price=${price}`;
    }
    return this.http.get<Accessory[]>(url);
  }}
