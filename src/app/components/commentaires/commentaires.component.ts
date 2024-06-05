import {Component, Input} from '@angular/core';
import { TopicComment } from "../../models/topicComment";

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrl: './commentaires.component.css'
})
export class CommentairesComponent {
  @Input() commentaireRecu: TopicComment;
}
