import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TopicPostDisplay} from "../models/topic-post-display.model";

@Injectable()
export class TopicsPostsService  {

  public topicsDisplay: TopicPostDisplay[];

  constructor(private httpClient: HttpClient) {
  }

  // Add Get Service
  public getTopicPostDisplay(): Observable<TopicPostDisplay[]> {
    let getUrl = 'http://127.0.0.1:9000/topics';
    return this.httpClient.get<TopicPostDisplay[]>(getUrl);
  }

  // Add Post Service here

}
