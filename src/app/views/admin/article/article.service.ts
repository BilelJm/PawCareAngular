import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../../../article';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseURL= "http://localhost:8080/articles"
  constructor(private httpClient: HttpClient) { }

  getArticleList(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${this.baseURL}`).pipe(
      tap(articles => {
        articles.forEach(article => {
          article.imageUrl = `${this.baseURL}/${article.id}/picture`;
        });
      })
    );
  }
  
  

  createArticle(article: Article, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('title', article.title);
    formData.append('content', article.content);
    formData.append('tags', article.tags);
    formData.append('imageFile', file, file.name);

    return this.httpClient.post(`${this.baseURL}/addArticle`, formData);
  }
  
  getArticleById(id: number): Observable<Article>{
    return this.httpClient.get<Article>(`${this.baseURL+"/"}${id}`);
  }

  updateArticle(id: number, article: Article, file: File): Observable<Object> {
    const formData: FormData = new FormData();
    formData.append('title', article.title);
    formData.append('content', article.content);
    formData.append('tags', article.tags);
    if (file) {
      formData.append('media', file, file.name);
    }
    return this.httpClient.put(`${this.baseURL+"/updateArticle"}/${id}`, formData);
  }
  

 deleteArticle(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL+"/deleteArticle/"}${id}`);
  }

  getArticleCount(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL+"/count"}`);
  }
  
  getCommentsForArticle(id: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${this.baseURL}/${id}/comments`);
  }
  

}
