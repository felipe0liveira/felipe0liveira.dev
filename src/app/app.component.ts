import { Component, OnInit } from '@angular/core';
import { BlogService } from './services/blog-service/blog.service';
import { Article } from './interfaces/article.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public blogService: BlogService) {

  }

  ngOnInit(): void {
    this.blogService.updatePublishedArticles();
  }

  goToArticle(article: Article) {
    window.open(article.url, '_blank');
  }

  closeWindow() {
    if (confirm('Deseja realmente fechar esta janela?')) {
      alert('Brincou :O\nVocê ia fechar mesmo...');
    }
  }

  minimizeWindow() {
    alert('Sério?\nVocê achou mesmo que ia minimizar?')
  }
}

