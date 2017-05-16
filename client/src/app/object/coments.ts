export class Coments {
  id: number;
  author: string;
  commentMessage: string;
  dateOfCreation: string;

  constructor(author:string, commentMessage:string) {
    this.author = author;
    this.commentMessage = commentMessage;
  }
}