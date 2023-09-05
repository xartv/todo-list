import { UserEntity } from 'entities/User';

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt',
}

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  FINANCE = 'FINANCE',
  POLITICS = 'POLITICS',
  SCIENCE = 'SCIENCE',
}

export enum ArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
}

export enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL',
}

export interface ArticleEntity {
  id: string;
  title: string;
  subtitle: string;
  user: UserEntity;
  userId: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export type ArticleBlock = ArticleBlockText | ArticleBlockCode | ArticleBlockImage;

export interface ArticleBlockCommon {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleBlockText extends ArticleBlockCommon {
  type: ArticleBlockType.TEXT;
  title: string;
  paragraphs: string[];
}

export interface ArticleBlockCode extends ArticleBlockCommon {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleBlockImage extends ArticleBlockCommon {
  type: ArticleBlockType.IMAGE;
  title: string;
  src: string;
}
