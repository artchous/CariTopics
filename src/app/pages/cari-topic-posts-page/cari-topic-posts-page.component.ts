import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {TopicPostDisplay} from '../../models/topic-post-display.model';
import {TopicsPostsService} from '../../services/topics-posts.service';

@Component({
  selector: 'app-cari-topic-posts-page',
  templateUrl: './cari-topic-posts-page.component.html',
  styleUrl: './cari-topic-posts-page.component.css',
})
export class CariTopicPostsPageComponent implements OnChanges {
  public allTopicPostsDisplay: TopicPostDisplay[] =
    [new TopicPostDisplay(), new TopicPostDisplay(), new TopicPostDisplay(),
      new TopicPostDisplay(), new TopicPostDisplay(),new TopicPostDisplay()];

  constructor(private topicsPostsService: TopicsPostsService) {
    this.getTopics();
  }

  comment():void {
    let newWin = window.open("about:blank", "hello","width=250,height=50");
    // @ts-ignore
    newWin.document.write("Ne fonctionne pas encore");
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  //topics
  private getTopics() {
    this.topicsPostsService.getTopicPostDisplay().subscribe(
      {
        next: result => {
           console.log("Topics ", result);
           this.allTopicPostsDisplay = result;
        },
        error: err => {
          console.log(err);
        }
      }
    )
  }
}
