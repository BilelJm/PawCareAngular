import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from './pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private baseURL="http://localhost:8080/api/auth/pet/"
  constructor(private httpClient:HttpClient) { }
  getPetsList():Observable<Pet[]>{
    return this.httpClient.get<Pet[]>(`${this.baseURL+"GetAll"}`);
  }

  createPet(pet: Pet): Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"addPet"}`, pet);
  }
  getPetById(id: number): Observable<Pet>{
    return this.httpClient.get<Pet>(`${this.baseURL+"GetPet/"}${id}`);
  }

  updatePet(id: number, pet: Pet): Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"updatePet/"}${id}`, pet);
  }

  deletePet(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL+"deletePet/"}${id}`);
  }

  searchPet(name:String):Observable<Pet[]>
  {
    return this.httpClient.get<Pet[]>(`${this.baseURL+"GetPetByName/"}${name}`);
  }
  GetPetsNumber(): Observable<number> {
    return this.httpClient.get<number>(`${this.baseURL}GetPetsNumberAddedLast24`);
  }
  
  

}
