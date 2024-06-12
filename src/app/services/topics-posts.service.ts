import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TopicPostDisplay} from "../models/topic-post-display.model";
import {TopicComment} from "../models/topicComment";

@Injectable()
export class TopicsPostsService  {

  constructor(private httpClient: HttpClient) {
  }

  //Get Service
  //Topics
  public getTopicPostDisplay$(): Observable<TopicPostDisplay[]> {
    let getUrl = 'http://localhost:9000/topics';
    return this.httpClient.get<TopicPostDisplay[]>(getUrl);
  }

  //Post Service
  /**
  public postComment$(topicID: number, containerIn: TopicComment): Observable<void> {
    let postUrl = 'http://localhost:9000/createComment';
    return this.httpClient.post<void>(postUrl, TopicComment);

  }
   **/

  public postComment$(): Observable<void> {
    let postUrl = 'http://localhost:9000/createComment';
    return this.httpClient.post<void>(postUrl, TopicComment);

  }
}
