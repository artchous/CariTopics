import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TopicPostDisplay} from "../models/topic-post-display.model";

@Injectable()
export class TopicsPostsService  {

  constructor(private httpClient: HttpClient) {
  }

  //Get Service
  //Topics
  public getTopicPostDisplay(): Observable<TopicPostDisplay[]> {
    let getUrl = 'http://localhost:9000/topics';
    return this.httpClient.get<TopicPostDisplay[]>(getUrl);
  }

  // Add Post Service here

}
