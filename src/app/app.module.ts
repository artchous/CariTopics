import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {CariTopicPostsPageComponent} from './pages/cari-topic-posts-page/cari-topic-posts-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {TopicsPostsService} from './services/topics-posts.service';
import {MatIcon} from "@angular/material/icon";
import { CommentairesComponent } from './components/commentaires/commentaires.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatButton, MatFabAnchor, MatFabButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import { CreateNewTopicPageComponent } from './pages/create-new-topic-page/create-new-topic-page.component';
import { AddFilePageComponent } from './pages/add-file-page/add-file-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CommentairesComponent,
    CariTopicPostsPageComponent,
    CreateNewTopicPageComponent,
    AddFilePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule,
    MatTabsModule,
    HttpClientModule,
    MatIcon,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatButton,
    MatIconButton,
    MatFabButton,
    MatFabAnchor,
    FormsModule,
    MatMiniFabButton

  ],
  providers: [
    TopicsPostsService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
