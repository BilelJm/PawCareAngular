import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  Url="http://localhost:8080/api/auth/"

  getAllDoctors():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.Url+"GetAllDoctors"}`);
  }

}
