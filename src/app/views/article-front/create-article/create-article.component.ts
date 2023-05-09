import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/article';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from '../../admin/article/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
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
  Articles: Article = new Article();
  title: string;
  imageFile: File;
  fileToUpload: File | null = null;
   id: number
  article: Article;
  comment: Comment[] = [];
  constructor(private route:ActivatedRoute,private articleService: ArticleService,
    private router:Router,private http: HttpClient) { }


    ngOnInit(): void {
      this.articleService.getArticleList().subscribe(data => {
        this.articles = data;
        for (const article of this.articles) {
          this.articleService.getCommentsForArticle(article.id).subscribe(comments => {
            this.comment = comments;
          });
        }
      });
    }
    
  private getArticles(){
    this.articleService.getArticleList().subscribe(data =>{
      this.articles = data;
    });
  }

  updateArticle(id: number){
    this.router.navigate(['/article-update',id]);
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
    this.router.navigate(['/article-details',id]);
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
    this.router.navigate(['/list-article']);
  
  }
  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
  }

}