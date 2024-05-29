import {Component, OnInit} from '@angular/core';
import {TopicPostDisplay} from '../../models/topic-post-display.model';
import {TopicsPostsService} from '../../services/topics-posts.service';

@Component({
  selector: 'app-cari-topic-posts-page',
  templateUrl: './cari-topic-posts-page.component.html',
  styleUrl: './cari-topic-posts-page.component.css'
})
export class CariTopicPostsPageComponent {
  public allTopicPostsDisplay: TopicPostDisplay[] = [new TopicPostDisplay(), new TopicPostDisplay()];

  constructor(private topicsPostsService: TopicsPostsService) {
  }
}
