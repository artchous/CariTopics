import { TopicFile } from "./file.model";
import { TopicComment } from "./topicComment";

export class TopicPostDisplay {
  public titre: string;
  public username: string;
  public date: String;
  public description: string;
  public files: TopicFile[];
  public comments: TopicComment[];

  constructor( ) {
    this.titre = 'Topic 1';
    this.username = 'Lilly Bloom';
    this.date = new Date().toLocaleDateString();
    this.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut arcu aliquam, bibendum mi sit amet, sodales velit. Sed gravida ultrices porttitor. Praesent id velit nec sem egestas venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut arcu aliquam, bibendum mi sit amet, sodales velit. Sed gravida ultrices porttitor. Praesent id velit nec sem egestas venenatis.';
    this.files = [new TopicFile(), new TopicFile(), new TopicFile()];
    this.comments = [new TopicComment(), new TopicComment()]
  }

}
