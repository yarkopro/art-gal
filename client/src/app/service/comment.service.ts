import {Injectable}     from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Coments} from "../object/coments";

@Injectable()
export class ComentsService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiURI = "api/";
    private commentsURI = "comments/"

    constructor(private http: Http) {
    }

    get(artId: number): Promise<Coments[]> {
        return this.http.get(this.apiURI + this.commentsURI + `art/${artId}`)
            .toPromise().then(response => response.json() as Coments[]);
    }

    addComment(comment: Coments, artId: number): Promise<void> {
        return this.http.post(this.apiURI + this.commentsURI + `add?artId=${artId}`, comment)
            .toPromise();
    }
}
