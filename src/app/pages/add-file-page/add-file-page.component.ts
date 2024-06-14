import {Component, Input, OnDestroy} from '@angular/core';
import {finalize, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {TopicsPostsService} from "../../services/topics-posts.service";
import {NgForm} from "@angular/forms";
import {CariTopicPostsPageComponent} from "../cari-topic-posts-page/cari-topic-posts-page.component";
import {TopicFile} from "../../models/file.model";
import {TopicPostDisplay} from "../../models/topic-post-display.model";

@Component({
  selector: 'app-add-file-page',
  templateUrl: './add-file-page.component.html',
  styleUrl: './add-file-page.component.css'
})
export class AddFilePageComponent implements OnDestroy{

  /** pour formAddFiles **/
  public nombreTopics:number;
  date_post: string = new Date().toLocaleDateString();
  public nbrFicher:number;
  private postFileSubscription: Subscription;
  public loader: boolean;
  public router: Router;



  constructor(private topicsPostsService: TopicsPostsService) {
    this.getTopics();
    this.loader=false;
  }

public compterNbr(){
    this.nbrFicher=parseFloat((<HTMLInputElement>document.getElementById("nFichier")).value);
    console.log(this.nbrFicher);
}


  ngOnDestroy() {
    this.postFileSubscription?.unsubscribe();
  }

  //ramène les topics du BE
  private getTopics() {
    this.topicsPostsService.getTopicPostDisplay$().subscribe(
      {
        next: result => {
          this.nombreTopics = result.length;
        },
        error: err => { console.log(err); }
      }
    )
  }


  //postFile
  public postFile(form:NgForm){
    this.loader = true;
    this.postFileSubscription = this.topicsPostsService.postFiles$(form.value)
      .pipe(finalize(() => this.loader = true))
      .subscribe(() => this.reloadPage())
    console.log(form.value)
  }


  private reloadPage() {
    window.location.href="http://localhost:4200/"
  }

}
