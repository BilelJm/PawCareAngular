import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Adoption } from './adoption';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {

  private baseURL = "http://localhost:8080/adoption/adoption";
  constructor(private httpClient: HttpClient) { }
  
  getAdoptionList(): Observable<Adoption[]>{
    return this.httpClient.get<Adoption[]>(`${this.baseURL}`);
  }
  
  location: string;
 description: string; 
  picture: string;
  cDate: Date;
  title: string;
  email:string;
  IdPet:any;

  addAdoption(adoption: Adoption, imageFile: File,IdPet:any): Observable<any> {
    const formData = new FormData();
    formData.append('title', adoption.title);
    formData.append('location', adoption.location);
    formData.append('description', adoption.description);
    formData.append('imageFile', imageFile);
    formData.append('Email', adoption.email);
    formData.append('IdPet', IdPet);

  
  

    return this.httpClient.post(`${this.baseURL}`, formData);
  }



updateAdoption(idAdoption: number, adoption: Adoption, imageFile: File): Observable<any> {
  const formData = new FormData();
  formData.append('title', adoption.title);
  formData.append('location', adoption.location);
  formData.append('description', adoption.description);
  formData.append('Email', adoption.email);
  
  if (imageFile) {
    formData.append('imageFile', imageFile, imageFile.name);
  }
  
  return this.httpClient.put(`${this.baseURL}/${idAdoption}`, formData);
}



  getAdoptionById(idAdoption: number): Observable<Adoption>{
    return this.httpClient.get<Adoption>(`${this.baseURL}/${idAdoption}`);
  }
  

  deleteAdoption(idAdoption: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idAdoption}`);
  }

  
}

