import {Injectable}   from '@angular/core'
import {Http} from '@angular/http'


import 'rxjs/add/operator/toPromise';
import {Art} from "../object/art";
import {Tag} from "../object/tag";
import {Observable} from "rxjs";

@Injectable()
export class ArtService {

    private apiURI = 'api/';

    constructor(private http: Http) {
    }

    getAllArts(): Observable<Art[]> {
        return this.http.get(this.apiURI)
            .map(response => response.json() as Art[]);
    }

    findArtByName(name: string): Observable<Art[]> {
        return this.http.get(this.apiURI + `findArtByName?artName=${name}`)
            .map(response => response.json() as Art[]);
    }

    findArtById(id: number): Promise<Art> {
        return this.http.get(this.apiURI + `findArtById?artId=${id}`)
            .toPromise().then(response => response.json() as Art)
    }

    findByTagId(tagId: number): Observable<Art[]> {
        return this.http.get(this.apiURI + `findByTagId?tagId=${tagId}`)
            .map(response => response.json() as Art[])
    }

    getAllTags(): Promise<Tag[]> {
        return this.http.get(this.apiURI + `/tags`)
            .toPromise().then(response => response.json() as Tag[])
    }

    addView(id: number): Promise<number> {
        return this.http.get(this.apiURI + `art/addView?artId=${id}`)
            .toPromise()
            .then(response => response.json() as number)
    }

    artLike(id: number): Promise<number> {
        return this.http.get(this.apiURI + `artLike?artId=${id}`)
            .toPromise()
            .then(response => response.json() as number)
    }

    addArt(art: Art): void {
        this.http.post(this.apiURI + `/addNewArt`, art).subscribe();
    }
}
