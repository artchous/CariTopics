import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CariTopicPostsPageComponent } from './pages/cari-topic-posts-page/cari-topic-posts-page.component';
import {CreateNewTopicPageComponent} from "./pages/create-new-topic-page/create-new-topic-page.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/display-topics'},
  {path: 'display-topics', component: CariTopicPostsPageComponent},
  {path: 'create-new-topic', component: CreateNewTopicPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
