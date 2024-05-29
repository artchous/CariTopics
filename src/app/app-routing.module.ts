import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CariTopicPostsPageComponent } from './pages/cari-topic-posts-page/cari-topic-posts-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/display-topics'},
  {path: 'display-topics', component: CariTopicPostsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
