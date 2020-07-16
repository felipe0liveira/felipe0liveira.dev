import { Component, OnInit } from '@angular/core';
import { BlogService } from './services/blog-service/blog.service';
import { CodepenService } from './services/codepen-service/codepen.service';
import { Article } from './interfaces/article.interface';
import { Pen } from './interfaces/codepen.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public blogService: BlogService,
    public codepenService: CodepenService
  ) {}

  ngOnInit(): void {
    this.blogService.updatePublishedArticles();
    this.codepenService.updatePublishedPens(`felipe0liveira`);
  }

  goToArticle(article: Article) {
    window.open(article.url, '_blank');
  }

  goToPen(pen: Pen) {
    window.open(pen.link, '_blank');
  }

  closeWindow() {
    if (confirm('Deseja realmente fechar esta janela?')) {
      alert('Brincou :O\nVocê ia fechar mesmo...');
    }
  }

  minimizeWindow() {
    alert('Sério?\nVocê achou mesmo que ia minimizar?');
  }
}
