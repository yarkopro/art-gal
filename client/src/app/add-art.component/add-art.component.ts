import { Component, OnInit } from '@angular/core';
import {ArtService} from "../service/art.service";
import {Art} from "../object/art";
import {User} from "../object/user";


@Component({
  moduleId: module.id,
  selector: 'add-art',
  templateUrl: 'add-art.component.html',
  styleUrls: ['add-art.component.css']
})


export class AddArtComponent {



  constructor(private artService: ArtService) {
  }

addArt(owner:string, name:string, imagePath:string, description:string ): void {
    var user :User = new User(owner);
    var art : Art = new Art(name, imagePath, description);
  this.artService.addArt(art);
  }

}




