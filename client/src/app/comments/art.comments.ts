import {Component, OnInit, Input} from '@angular/core';

import {Coments} from '../object/coments';
import {ComentsService} from '../service/comment.service';


@Component({
  moduleId: module.id,
  selector: 'comment-comp',
  templateUrl: 'art.comments.html',
  styleUrls: ['art.comments.css']
})
export class ArtComments implements OnInit {

  @Input()
  artId: number;

  coments: Coments[] = [];
 
  constructor(private comentsService: ComentsService) {
  }

  ngOnInit(): void {
    this.comentsService.get(this.artId).then(comments => this.coments = comments);
  }

  addComment(mess: string, author:string): void {
    var newComment:Coments = new Coments(author, mess);
    this.comentsService.addComment(newComment,this.artId).then(result => this.coments.unshift(result
    ));;
  }
}