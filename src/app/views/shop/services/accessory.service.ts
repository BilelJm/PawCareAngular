import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";
import {Accessory} from "../models/accessory";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccessoryService {

  constructor(private http:HttpClient) { }
  public addAccessory(accessory:Accessory){
    return this.http.post("http://localhost:8080/accessory/addAccessory",accessory)
  }

  public getAccessories(page: number, size: number, sortField: string, sortDir: string) {
    const params = new HttpParams()
      .set('page', String(page))
      .set('size', String(size))
      .set('sortField', sortField)
      .set('sortDir', sortDir);
    return this.http.get<any>('http://localhost:8080/accessory/listaccessories', { params });
  }

  public GetAccessoryById(idAccessory:number){

    return this.http.get("http://localhost:8080/accessory/getAccessoryById/"+idAccessory)
  }
  public deleteAccessory(idAccessory:number)
  {
    return  this.http.delete("http://localhost:8080/accessory/deleteAccessory/"+idAccessory)
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
  }

  exportAccessoriesToCsv(): Observable<Blob> {
      return this.http.get(`http://localhost:8080/accessory/AccessoriesToCsv`, { responseType: 'blob' });
    }

  public addAccessoryUpload(accessory: Accessory, image: File): Observable<string> {
    const formData = new FormData();
    formData.append('name', accessory.name);
    formData.append('price', accessory.price.toString());
    formData.append('description', accessory.description);
    formData.append('image', image);

    return this.http.post<any>('http://localhost:8080/accessory/addAccessoryUpload1', formData).pipe(
      map(response => response.imageUrl)
    );
  }

  updateAccessory(idAccessory: number, data: any, image: File): Observable<any> {
    const url = `http://localhost:8080/accessory/updateAccessory/${idAccessory}`;
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('description', data.description);
    if (image) {
      formData.append('image', image);
    }
    return this.http.put(url, formData);
  }
}
