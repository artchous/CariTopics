import {Component, OnDestroy} from '@angular/core';
import {TopicsPostsService} from "../../services/topics-posts.service";
import {NgForm} from "@angular/forms";
import {finalize, Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-new-topic-page',
  templateUrl: './create-new-topic-page.component.html',
  styleUrl: './create-new-topic-page.component.css'
})

export class CreateNewTopicPageComponent implements OnDestroy{

  /** pour formNewTopic **/
  date_post: string = new Date().toLocaleDateString();
  private postTopicSubscription: Subscription;
  public loader: boolean;
  public router: Router;


  constructor(private topicsPostsService: TopicsPostsService) {
    this.loader=false;

  }

  ngOnDestroy() {
    this.postTopicSubscription?.unsubscribe();
  }


  //post Topic
  public postnewTopic(form:NgForm) {
    this.loader = true;
    this.postTopicSubscription = this.topicsPostsService.postTopic$(form.value)
      .pipe(finalize(() => this.loader = true))
      .subscribe(() => this.addFiles())
    console.log(form.value);
  }


  private addFiles() {
    window.location.href="http://localhost:4200/add-files"
   // <HTMLInputElement>document.getElementById("button1-addTopic")
  }

}
