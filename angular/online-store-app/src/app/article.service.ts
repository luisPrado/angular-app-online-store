import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from './article';
import { ARTICLES } from './mock-articles';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  private articlesUrl = 'api/articles';  // URL to web api
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getArticles(): Observable<Article[]> {
  	this.messageService.add('ArticleService: fetched articles');
  	//return of(ARTICLES);
  	return this.http.get<Article[]>(this.articlesUrl)
  	  .pipe(
  	    tap(_ => this.log('fetched heroes')),
        catchError(this.handleError('getArticles', []))
      );
  }


  getArticle(id: number): Observable<Article> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`ArticleService: fetched article id=${id}`);
    return of(ARTICLES.find(article => article.id === id));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ArticleService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
  	return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
};