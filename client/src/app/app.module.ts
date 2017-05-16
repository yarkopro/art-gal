import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component/app.component';
import {ArtService} from './service/art.service'
import {ArtComponent} from "./art.component/art.component";
import {ArtDetailComponent} from "./art-details.component/art-details.component";
import {RouterModule} from "@angular/router";
import {ArtContainer} from "./art-container.component/art-container.component";
import {HeadBarComponent} from './headbar.component/headbar.component'
import {LoginField} from "./login-field.component/login-field.component";
import {HomeComponent} from "./home.component/home.component";
import {Footer} from "./footer.component/footer.component";
import {RightSlide} from "./right-slide.component/right-slide.component"
import {ArtComments} from './comments/art.comments';
import {ComentsService} from './service/comment.service';
import {AddArtComponent} from './add-art.component/add-art.component';
import {ArtObserver} from "./service/art-resources.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'detail/:artId',
        component: ArtDetailComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'add-art',
        component: AddArtComponent
      }

    ])
  ],
  declarations: [
    AppComponent, ArtComponent, ArtContainer, ArtDetailComponent,
    HeadBarComponent, LoginField, HomeComponent, ArtComments, Footer, RightSlide,AddArtComponent
  ],
  providers: [ArtService, ComentsService,ArtObserver],
  bootstrap: [AppComponent]
})
export class AppModule {

}
