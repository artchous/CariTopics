import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {TopicPostDisplay} from '../../models/topic-post-display.model';
import {TopicsPostsService} from '../../services/topics-posts.service';
import {finalize, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {TopicComment} from "../../models/topicComment";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-cari-topic-posts-page',
  templateUrl: './cari-topic-posts-page.component.html',
  styleUrl: './cari-topic-posts-page.component.css',
})

export class CariTopicPostsPageComponent implements OnChanges {

  //pour formCommentaire
  topicID: number;
  comment_user: string;
  comment_content: string;
  comment_date: string = new Date().toLocaleDateString();

  private postCommentSubscription: Subscription;
  public loader: boolean;
  public router: Router

  public allTopicPostsDisplay: TopicPostDisplay[] =
    [new TopicPostDisplay(), new TopicPostDisplay()];

  constructor(private topicsPostsService: TopicsPostsService) {
    this.getTopics()
    this.loader = false
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnDestroy() {
    this.postCommentSubscription?.unsubscribe();
  }

  //topics
  private getTopics() {
    this.topicsPostsService.getTopicPostDisplay$().subscribe(
      {
        next: result => {
           console.log("Topics ", result);
           this.allTopicPostsDisplay = result;
        },
        error: err => { console.log(err); }
      }
    )
  }

  //post Comment
  public postComment(form: NgForm) {
    if (form !== undefined) {
      this.loader = true;
      this.postCommentSubscription = this.topicsPostsService.postComment$()
        .pipe(finalize(() => this.loader = false))
        .subscribe(() => this.reloadPage())
      console.log(form.value);
    }



  }

  private reloadPage() {
    this.router.navigated = false;
    this.router.navigate([this.router.url.replace('%20', ' ')]);
  }

  comment():void {
    let newWin = window.open("about:blank", "hello","width=250,height=50");
    // @ts-ignore
    newWin.document.write("Ne fonctionne pas encore");
  }

  protected readonly Date = Date;
  protected readonly TopicComment = TopicComment;
  protected readonly onsubmit = onsubmit;
}
