import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/article';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  Articles: Article = new Article();
  imageFile: File;
    constructor(private articleService: ArticleService,
      private router:Router,private http: HttpClient) { }
    @Input()
      get color(): string {
        return this._color;
      }
      set color(color: string) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
      }
      private _color = "light";
      fileToUpload: File | null = null;

    ngOnInit() {
    }
    handleFileInput(files: FileList): void {
      this.fileToUpload = files.item(0);
    }
  
  onSubmit(): void {
    this.articleService.createArticle(this.Articles, this.fileToUpload).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    this.goToArticleList();
  }
  goToArticleList(){
    this.router.navigate(['/admin/article-list']);
  
  }
  }
  