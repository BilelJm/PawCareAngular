import { Comment } from "./comment";

export class Article {
    user!: string;
    id!: number;
    title!: string;
    content!: string;
    nbviews!: number;
    nblike!: number;
    nbdislike!: number;
    nbcomments!: number;
    tags!: string;
    media!: string;
    comment!: Comment[];
    imageUrl: String;
}
