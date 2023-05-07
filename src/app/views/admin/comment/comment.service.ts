import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Comment } from '../../../comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseURL= "http://localhost:8080/comments"
  constructor(private httpClient: HttpClient) { }

  getArticleList():Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(`${this.baseURL}`);
  }
  createComment(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(`${this.baseURL}/addComment`, comment);
  }
}
