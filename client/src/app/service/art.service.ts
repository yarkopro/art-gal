import {Injectable}   from '@angular/core'
import {Http} from '@angular/http'


import 'rxjs/add/operator/toPromise';
import {Art} from "../object/art";
import {Tag} from "../object/tag";
import {Observable} from "rxjs";

@Injectable()
export class ArtService {

  constructor(private http: Http) {
  }

  getArtsForHomePage(): Observable<Art[]> {
    return this.http.get(`http://10.0.2.124:8088/`)
      .map(response => response.json() as Art[]);
  }

  artLike(id: number): Promise<number> {
    return this.http.get(`http://10.0.2.124:8088/artLike?artId=${id}`)
      .toPromise()
      .then(response => response.json() as number)
  }

  findArtByName(name: string): Observable<Art[]> {
    return this.http.get(`http://10.0.2.124:8088/findArtByName?artName=${name}`)
      .map(response => response.json() as Art[]);
  }

  findByTagId(tagId: number): Observable<Art[]> {
    return this.http.get(`http://10.0.2.124:8088/arts/findByTagId?tagId=${tagId}`)
      .map(response => response.json() as Art[])
  }

  getAllTags(): Promise<Tag[]> {
    return this.http.get(`http://10.0.2.124:8088/getAllTags`).toPromise().then(response => response.json() as Tag[])

  }

  findArtById(id: number): Promise<Art> {
    return this.http.get(`http://10.0.2.124:8088/findArtById?artId=${id}`)
      .toPromise()
      .then(response => response.json() as Art)
  }



  addView(id: number): Promise<number> {
    return this.http.get(`http://10.0.2.124:8088/art/addView?artId=${id}`)
      .toPromise()
      .then(response => response.json() as number)
  }

  addArt(art:Art):void {
   this.http.post(`http://10.0.2.124:8088/addNewArt`, art).subscribe();

  }
}
