import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

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
}
