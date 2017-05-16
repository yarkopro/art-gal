import {Component, Input} from "@angular/core";
import {ArtService} from "../service/art.service";
import {Art} from "../object/art";

@Component({
  selector: 'art-component',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent {
  @Input()
  art: Art;

  constructor(private artService: ArtService) {
  }

  isLiked = false;

  addLike() {
    if (this.isLiked) return;
    this.isLiked = true;
    this.artService.artLike(this.art.id).then(likes => this.art.likes = likes);
  }  
}


