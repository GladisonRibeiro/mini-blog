import { Injectable } from '@angular/core';

import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articleList: Array<Article> = [
    {
      id: 0,
      title: 'Article 0',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae labore doloribus quis ducimus molestiae temporibus nam, possimus adipisci consequatur vero similique voluptatum, eligendi voluptatibus earum voluptas laborum quam id.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae labore doloribus quis ducimus molestiae temporibus nam, possimus adipisci consequatur vero similique voluptatum, eligendi voluptatibus earum voluptas laborum quam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae labore doloribus quis ducimus molestiae temporibus nam, possimus adipisci consequatur vero similique voluptatum, eligendi voluptatibus earum voluptas laborum quam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae labore doloribus quis ducimus molestiae temporibus nam, possimus adipisci consequatur vero similique voluptatum, eligendi voluptatibus earum voluptas laborum quam id.'
    },
    {
      id: 1,
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


}
