import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../admin/comment/comment.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/article';
import { Comment } from 'src/app/comment';
import { ArticleService } from '../../admin/article/article.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
 
  article: Article;
  comment: Comment = {
    content: ''
  };

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticleById(id).subscribe(article => {
      this.article = article;
    });
  }

  addComment(article: Article) {
    if (article) { // Check if the article object is defined
      this.articleService.addComment(article.id, this.comment.content).subscribe(() => {
        // reset the form and reload the article
        this.comment.content = '';
        this.getArticle();
      });
    } else {
      console.error('Invalid article object: undefined');
    }
  }  
}
