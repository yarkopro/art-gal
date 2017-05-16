import {Injectable} from '@angular/core';
import {Art} from "../object/art";
import {Subject} from "rxjs";

@Injectable()
export class ArtObserver {

  private artsSubjects: Subject<Art[]>;

  constructor() {
    this.artsSubjects = new Subject<Art[]>();
  };

  next(arts: Art[]) {
    this.artsSubjects.next(arts);
  }

  subscribe(param: (res?) => void) {
    this.artsSubjects.subscribe(param);
  }
}
