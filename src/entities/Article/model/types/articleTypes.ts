export interface ArticleEntity {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  block: ArticleBlock[];
}

export enum ArticleType {
  IT = 'IT',
  FINANCE = 'FINANCE',
  POLITICS = 'POLITICS',
}

export enum ArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
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
