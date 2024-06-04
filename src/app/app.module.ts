import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {CariTopicPostsPageComponent} from './pages/cari-topic-posts-page/cari-topic-posts-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {TopicsPostsService} from './services/topics-posts.service';
import {MatIcon} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CariTopicPostsPageComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatExpansionModule,
        MatTabsModule,
        HttpClientModule,
        MatIcon,
    ],
  providers: [
    TopicsPostsService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
