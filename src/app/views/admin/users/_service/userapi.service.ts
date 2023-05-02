import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Role } from './role';


@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  
  private baseUrl= "http://localhost:8080/api/users";
  constructor( private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/list`);
  }

  getUsersByRole(roleName: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/getUsersByRoleNative?role=${roleName}`);
  }

  updateUser(userId: number, userDetails: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/updateUser/${userId}`, userDetails);
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteuser?id=${userId}`);
  }
  updateUserRoles(userId: number, roles: string[]): Observable<User> {
    const url = `${this.baseUrl}/update/${userId}/roles`;
    return this.http.put<User>(url, roles);
}
}
