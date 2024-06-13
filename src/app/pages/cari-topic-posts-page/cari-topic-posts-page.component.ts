import {Component, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {TopicPostDisplay} from '../../models/topic-post-display.model';
import {TopicsPostsService} from '../../services/topics-posts.service';
import {finalize, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {TopicComment} from "../../models/topicComment";

@Component({
  selector: 'app-cari-topic-posts-page',
  templateUrl: './cari-topic-posts-page.component.html',
  styleUrl: './cari-topic-posts-page.component.css',
})

export class CariTopicPostsPageComponent implements OnChanges, OnDestroy {

  /** Pour formCommentaire **/
  comment_user: string;
  comment_content: string;
  comment_date: string = new Date().toLocaleDateString();
  protected readonly Object = Object;
  private postCommentSubscription: Subscription;
  public loader: boolean;
  public router: Router

  /** Si pas de données du BE, prend les données en dur**/
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
  public postComment(index: number) {
    this.loader = true;
    let comment = new TopicComment();
    comment.comment_date = this.comment_date;
    comment.comment_content = this.comment_content;
    comment.comment_user = this.comment_user;
    comment.topicID = this.allTopicPostsDisplay[index].id //aussi = (index+1);
    this.postCommentSubscription = this.topicsPostsService.postComment$(comment)
      .pipe(finalize(() => this.loader = true))
      .subscribe(() => this.reloadPage())

  }

  private reloadPage() {
    window.location.reload();
  }


}
