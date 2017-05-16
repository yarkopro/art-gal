import {Component, OnInit, Input} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Location} from "@angular/common";
import {ArtService} from "../service/art.service";

import 'rxjs/add/operator/switchMap';
import {Art} from "../object/art";

@Component({
  moduleId: module.id,
  selector: 'art-detail-component',
  templateUrl: './art-detail.component.html',
  styleUrls: ['art-detail.component.css']
})
export class ArtDetailComponent implements OnInit {

  art: Art;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private artService: ArtService) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.artService.findArtById(+params['artId']))
      .subscribe(art => this.art = art);

    this.route.params
      .subscribe((params: Params) => this.addView(+params['artId']));
  }

  addView(artId: number): void {
    this.artService.addView(artId).then(views => this.art.views = views)

  }

}


