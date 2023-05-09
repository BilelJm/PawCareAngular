import { Article } from "./article";

export class Comment {
  idComment?: number;
  content!: string;
  blockedwords?: string;
  nblike?: number;
  created_at?: Date;
  updated_at?: Date;
  articleId?: number;
  article?: Article;
}