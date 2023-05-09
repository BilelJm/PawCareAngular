import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/article';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css']
})
export class ArticleUpdateComponent implements OnInit {
  id: number;
  Articles: Article = new Article();
  constructor(private articleService: ArticleService,private router:ActivatedRoute,private newrouter: Router) { }
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  fileToUpload: File | null = null;

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.articleService.getArticleById(this.id).subscribe(data => {this.Articles=data;}
      );
  }
  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);}
  goToArticleList(){
    this.newrouter.navigate(['/admin/article-list']);
  
  }
  onSubmit(): void {
    this.articleService.updateArticle(this.Articles.id, this.Articles, this.fileToUpload).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    this.goToArticleList();
  }
  
}
