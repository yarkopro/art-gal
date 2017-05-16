import {Component, OnInit, Input} from '@angular/core';
import {Subject}           from 'rxjs/Subject';

import {Coments} from '../object/coments';
import {ComentsService} from '../service/comment.service';

const COMENTS: Coments =

  {
    id: 2,
    author: 'Andrii',
    commentMessage: 'Nice.This work I really like. It is made at a high level',
    dateOfCreation: '12.06.15'
  } 
  const COMENTS2: Coments =
{
    id: 5,
    author: 'Andrii',
    commentMessage: 'Nice.',
    dateOfCreation: '12.06.15'
  }

@Component({
  moduleId: module.id,
  selector: 'comment-comp',
  templateUrl: 'art.comments.html',
  styleUrls: ['art.comments.css']


})
export class ArtComments implements OnInit {

  @Input()
  artId: number;

// coments = COMENTS;
  coments: Coments[] = [];
 
  
  constructor(private comentsService: ComentsService) {
  }

  ngOnInit(): void {
    this.comentsService.get(this.artId).then(com => this.coments = com);
  }

  addComment(mess: string, author:string): void {
    var newComment:Coments = new Coments(author, mess);
    this.comentsService.addComment(newComment,this.artId).then(result => this.coments.unshift(result
    ));;
  
  }
}