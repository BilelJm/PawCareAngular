import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentAdoption } from '../adoption';



@Injectable({
  providedIn: 'root'
})
export class CommentAdoptionService {
  private baseUrl = 'http://localhost:8080/commentAdoption';

  constructor(private httpClient: HttpClient) {}

  addCommentToAdoption(idAdoption: number,comment: CommentAdoption): Observable<CommentAdoption> {
    const url = `${this.baseUrl}/${idAdoption}`;
    
    return this.httpClient.post<CommentAdoption>(url, comment);
  }


  getCommentsForAdoption(idAdoption: number): Observable<CommentAdoption[]> {
    const url = `${this.baseUrl}/${idAdoption}`;
    return this.httpClient.get<CommentAdoption[]>(url);
  }

  
}
