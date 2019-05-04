import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';

import { ArticleService } from './../../../services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  article: Observable<Article>;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) 
  { }

  ngOnInit() {
    const id = this.route.params.pipe(
      filter(param => param.id)
    );

    this.article = id.pipe(
      switchMap(data => of(this.articleService.getArticleDetail(data.id)))
    );

  }

}
