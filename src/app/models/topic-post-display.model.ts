import { TopicFile } from "./file.model";
import { TopicComment } from "./topicComment";

export class TopicPostDisplay {
  public titre: string;
  public username: string;
  // public date: Date;
  public description: string;
  public files: TopicFile[];
  // public comments: TopicComment[];

  constructor() {
    this.titre = 'myTitle test';
    this.username = 'myUsername';
    this.description = 'myDescription';
    this.files = [new TopicFile()];
  }
}
