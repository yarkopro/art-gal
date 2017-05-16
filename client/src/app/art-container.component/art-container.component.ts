import {Component, OnInit} from "@angular/core";
import {Art} from "../object/art";
import {ArtObserver} from "../service/art-resources.service";
import {ArtService} from "../service/art.service";

@Component({
  moduleId: module.id,
  selector: 'art-container',
  templateUrl: 'art-container.component.html',
  styleUrls: ['art-container.component.css']
})

export class ArtContainer implements OnInit {

  constructor(private  artObserver: ArtObserver,
              private artService: ArtService) {
  }

  arts: Art[] = [];

  ngOnInit() {
    this.artService.getArtsForHomePage().subscribe(res => this.artObserver.next(res))
    this.artObserver.subscribe(arts => this.arts = arts);
  }
}
