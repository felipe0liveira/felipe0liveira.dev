import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Article } from 'src/app/interfaces/article.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  $articles: Observable<Article[]>;
  constructor(private http: HttpClient) {}

  updatePublishedArticles() {
    const params = new HttpParams().append('username', 'felipe0liveira');

    this.http
      .get(`${environment.devTo.articles}`, { params })
      .subscribe((res) => {
        this.$articles = new Observable((observer) => {
          observer.next(res as Article[]);
        });
      });
  }
}
