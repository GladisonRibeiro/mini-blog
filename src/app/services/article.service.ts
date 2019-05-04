import { Injectable } from '@angular/core';

import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articleList: Array<Article> = [
    {
      id: 1,
      title: 'Article 0',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae labore doloribus quis ducimus molestiae temporibus nam, possimus adipisci consequatur vero similique voluptatum, eligendi voluptatibus earum voluptas laborum quam id.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae labore doloribus quis ducimus molestiae temporibus nam, possimus adipisci consequatur vero similique voluptatum, eligendi voluptatibus earum voluptas laborum quam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae labore doloribus quis ducimus molestiae temporibus nam, possimus adipisci consequatur vero similique voluptatum, eligendi voluptatibus earum voluptas laborum quam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae labore doloribus quis ducimus molestiae temporibus nam, possimus adipisci consequatur vero similique voluptatum, eligendi voluptatibus earum voluptas laborum quam id.'
    },
    {
      id: 2,
      title: 'Article 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae labore doloribus quis ducimus molestiae temporibus nam, possimus adipisci consequatur vero similique voluptatum, eligendi voluptatibus earum voluptas laborum quam id.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae labore doloribus quis ducimus molestiae temporibus nam, possimus adipisci consequatur vero similique voluptatum, eligendi voluptatibus earum voluptas laborum quam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae labore doloribus quis ducimus molestiae temporibus nam, possimus adipisci consequatur vero similique voluptatum, eligendi voluptatibus earum voluptas laborum quam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae labore doloribus quis ducimus molestiae temporibus nam, possimus adipisci consequatur vero similique voluptatum, eligendi voluptatibus earum voluptas laborum quam id.'
    }
  ];

  constructor() { }

  getArticles() {
    return this.articleList;
  }

  getArticleDetail(id) {
    return this.articleList.filter(article => article.id == id)[0];
  }

  update(article) {

    if (article.id) {

    }
    else {
      return this.save(article);
    }
  }

  private save(article) {
    const id = this.articleList.length + 1;
    article.id = id;
    this.articleList.push(article);
    return article;
  }

}
