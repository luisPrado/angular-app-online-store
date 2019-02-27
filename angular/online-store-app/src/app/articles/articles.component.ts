import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();

  }
  /*article: Article = {
    id: 1,
    name: 'The lord of the Rings Book'
  };
  articles = ARTICLES;

  

  selectedArticle: Article;

  onSelect(article: Article): void {
    this.selectedArticle = article;
  }*/

  getArticles(): void {
    this.articleService.getArticles().subscribe(articles => this.articles = articles);
  }

}
