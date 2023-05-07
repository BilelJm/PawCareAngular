import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/article';
import { ArticleService } from '../../admin/article/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {
  fileToUpload: File | null = null;
  id: number
  article: Article;
  comments: Comment[] = [];
    constructor(private route:ActivatedRoute, private articleService: ArticleService) { }
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.article= new Article();
      this.articleService.getArticleById(this.id).subscribe(data=> {
        this.article = data;
        this.articleService.getCommentsForArticle(this.id).subscribe(comments => {
          this.comments = comments;
      });
    });
      
    }
    handleFileInput(files: FileList): void {
      this.fileToUpload = files.item(0);
    }
}
