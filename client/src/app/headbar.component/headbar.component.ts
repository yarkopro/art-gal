import {Component, trigger, state, style, transition, animate} from '@angular/core';
import {ArtService} from "../service/art.service";
import {ArtResources} from "../service/art-resources.service";
import 'rxjs/Rx';
@Component({
    selector: 'headbar',
    templateUrl: './headbar.component.html',
    styleUrls: ['./headbar.component.css'],
    animations: [
        trigger('slideInOut', [
            state('in', style({
                transform: 'translateY(25px)',
                opacity: 1
            })),
            state('out', style({
                transform: 'translateY(-25px)',
                opacity: 0
            })),
            transition('in => out', animate('250ms ease-in-out')),
            transition('out => in', animate('250ms ease-in-out'))
        ])]
})

export class HeadBarComponent {
    constructor(private artService: ArtService,
                private artObserver: ArtResources) {
    }

    btnState: string = 'out';
    searchKeyWord: string = "";
    isSearchResultEmpty: boolean = false;

    search() {
        this.artService.findArtByName(this.searchKeyWord).subscribe(arts => {
            this.artObserver.next(arts);
            (arts.length == 0) ?
                this.isSearchResultEmpty = true :
                this.isSearchResultEmpty = false;
        });
    }

    searchInputKeyUp() {
        if (this.isSearchInputEmpty()) {
            this.artService.getAllArts()
                .then(res => this.artObserver.next(res));
            this.isSearchResultEmpty = false;
        }
    }

    isSearchInputEmpty(): boolean {
        if (this.searchKeyWord === "") return true;
    }

    toggleLoginField(): void {
        if (this.btnState === 'out')
            this.btnState = 'in';
        else
            this.btnState = "out";
    }
}
