import { Component, OnInit } from '@angular/core';
import {ArtService} from "../service/art.service";
import {Tag} from "../object/tag";
import {ArtObserver} from "../service/art-resources.service";

@Component({
  moduleId: module.id,
  selector: 'right-slide',
  templateUrl: 'right-slide.component.html',
  styleUrls: ['right-slide.component.css']
})


export class RightSlide implements OnInit{

  constructor(private artService: ArtService,
              private artObserver: ArtObserver ) {
  }

  tags: Tag[] = [];

  ngOnInit() {
    this.artService.getAllTags().then(tags => this.tags = tags);
  }

  searchForTag(tagId:number){
    this.artService.findByTagId(tagId).subscribe(res => this.artObserver.next(res))
  }

}



