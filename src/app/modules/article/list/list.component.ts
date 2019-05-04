import { Component, OnInit } from '@angular/core';

import { ArticleService } from './../../../services/article.service';

import { Article } from './../../../models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  articleList: Array<Article>;

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.articleList = this.articleService.getArticles();
  }

  onSelectedArticle(article) {
    this.router.navigate(['/article', 'detail', article.id]);
  }

}
