import {Injectable}     from '@angular/core';
import {Http, Response,Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Coments} from "../object/coments";

@Injectable()
export class ComentsService {
private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  get(art_id: number): Promise<Coments[]> {
    return this.http.get(`http://10.0.2.124:8088/art/${art_id}/comments`)
               .toPromise()
               .then(response => response.json() as Coments[]);
  }

  addComment(comment: Coments, artId:number) : Promise<Coments>{

   return this.http.post(`http://10.0.2.124:8088/artId/${artId}/addComment`,comment)
              .toPromise()
              .then(response => response.json() as Coments);
 }

}
