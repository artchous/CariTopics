import {Component, OnDestroy} from '@angular/core';
import {finalize, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {TopicsPostsService} from "../../services/topics-posts.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-file-page',
  templateUrl: './add-file-page.component.html',
  styleUrl: './add-file-page.component.css'
})
export class AddFilePageComponent implements OnDestroy{

  /** pour formAddFiles **/
  numFichier:number;
  public nombreTopics:number;
  date_post: string = new Date().toLocaleDateString();
  public nbrFicher:number;
  private postFileSubscription: Subscription;
  public loader: boolean;
  public router: Router;



  constructor(private topicsPostsService: TopicsPostsService) {
    this.getTopics();
    this.loader=false;
    this.numFichier=-1;
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
  public postFile(form:NgForm,i:number){
    if(this.numFichier!=i) {
      this.loader = true;
      this.postFileSubscription = this.topicsPostsService.postFiles$(form.value)
        .pipe(finalize(() => this.loader = true))
        .subscribe(() => this.reloadPage(i))
      this.numFichier = i;
    }

  }


  private reloadPage(index:number) {
      if (index == (this.nbrFicher-1)) {
        window.location.href="http://localhost:4200/"
      }
  }

  actionMethod($event: MouseEvent) {
    ($event.target as HTMLButtonElement).disabled = true;
    ($event.target as HTMLButtonElement).style.background='grey';
  }

}

//https://stackoverflow.com/questions/51098464/angular-two-buttons-to-submit-a-form-but-with-different-purpose
//https://stackoverflow.com/questions/71221141/create-many-forms-in-one-component
