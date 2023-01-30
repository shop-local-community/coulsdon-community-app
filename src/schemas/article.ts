import { RequiredMedia } from './media';
import { Seo } from './shared';

type Article = {
  id: number,
  attributes: {
    title: string,
    content: string,
    image: RequiredMedia,
    seo: Seo,
    slug: string,
    publishedAt: string
  }
}

export type ArticleResponse = {
  data: ArticleResponseDataObject
}

export type ArticleResponseDataObject = Article;

export type ArticleListResponse = {
  data: ArticleListResponseDataItem[]
}

export type ArticleListResponseDataItem = Article;
