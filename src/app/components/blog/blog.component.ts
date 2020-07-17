import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog-service/blog.service';
import { Article } from 'src/app/interfaces/article.interface';
import { WindowsService } from 'src/app/services/windows-service/windows.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(public windowsService: WindowsService, public blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.updatePublishedArticles();
  }

  goToArticle(article: Article) {
    window.open(article.url, '_blank');
  }

}
