import {Component} from '@angular/core';
import {TopicPostDisplay} from '../../models/topic-post-display.model';
import {TopicsPostsService} from '../../services/topics-posts.service';
import {popNumber} from "rxjs/internal/util/args";

@Component({
  selector: 'app-cari-topic-posts-page',
  templateUrl: './cari-topic-posts-page.component.html',
  styleUrl: './cari-topic-posts-page.component.css'
})
export class CariTopicPostsPageComponent {
  public allTopicPostsDisplay: TopicPostDisplay[] = [new TopicPostDisplay(), new TopicPostDisplay()];

  constructor(private topicsPostsService: TopicsPostsService) {
  }

  comment() {}
}
