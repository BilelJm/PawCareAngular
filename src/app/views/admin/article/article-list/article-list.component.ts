import { Component, Input, OnInit } from '@angular/core';
import {Article} from '../../../../article'
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  searchQuery: string = '';
  articles: Article[] = [];
  title: string;

  constructor(private articleService: ArticleService,
    private router: Router) { }

  ngOnInit(): void {
    this.getArticles();

}
  private getArticles(){
    this.articleService.getArticleList().subscribe(data =>{
      this.articles = data;
    });
  }

  updateArticle(id: number){
    this.router.navigate(['/admin/article-update',id]);
  }
  deleteArticle(id:number){
    this.articleService.deleteArticle(id).subscribe(data => {
      console.log(data+ " is deleted")
      this.getArticles();
    })
  }

  Search() {
    if (!this.title) {
      console.log(this.title);
      this.ngOnInit();
    } else {
      console.log(this.title);
      this.articles = this.articles.filter(item => {
       return item.title.toLowerCase().includes(this.title.toLowerCase())
    });
    }
  }
  showArticle(id:number){
    this.router.navigate(['/admin/article-details',id]);
  }
}
