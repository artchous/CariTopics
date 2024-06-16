import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TopicPostDisplay} from "../models/topic-post-display.model";
import {TopicComment} from "../models/topicComment";
import {TopicFile} from "../models/file.model";

@Injectable()
export class TopicsPostsService  {

  constructor(private httpClient: HttpClient) {
  }

  /** Get service **/
  //Topics
  public getTopicPostDisplay$(): Observable<TopicPostDisplay[]> {
    let getUrl = 'http://localhost:9000/topics';
    return this.httpClient.get<TopicPostDisplay[]>(getUrl);
  }

  /** Post service **/
  //Envoyer topic au BE
  public postTopic$(containerIn: TopicPostDisplay): Observable<void> {
    let postUrl = 'createNewTopic';
    //console.log(containerIn);
    return this.raccourciURL(postUrl, containerIn);
  }

  //Envoyer files
  public postFiles$(containerIn: TopicFile): Observable<void> {
    let postUrl = 'createFile';
    return this.raccourciURL(postUrl, containerIn);
  }

  //Envoyer commentaire
  public postComment$(containerIn:TopicComment): Observable<void> {
    let postUrl = 'createComment';
    return this.raccourciURL(postUrl, containerIn);
  }

  public raccourciURL(url:string, containerIn:object) {
    let postUrl = 'http://localhost:9000/' + url;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.httpClient.post<void>(postUrl, containerIn, httpOptions);
  }

}

