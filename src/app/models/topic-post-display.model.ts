import { TopicFile } from "./file.model";
import { TopicComment } from "./topicComment";

export class TopicPostDisplay {
  public titre: string;
  public username: string;
  public date: Date;
  public description: string;
  public files: TopicFile[];
  public comments: TopicComment[];

  constructor() {
    this.titre = 'myTitle';
    this.username = 'myUsername';
    this.date = new Date();
    this.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut arcu aliquam, bibendum mi sit amet, sodales velit. Sed gravida ultrices porttitor. Praesent id velit nec sem egestas venenatis. Curabitur commodo lacus vel tristique dictum. Ut auctor molestie mi eget dignissim. Mauris et aliquam nunc. In eget pharetra magna, blandit auctor nisl. Aenean sit amet ultrices elit. Nulla placerat id nisi a pulvinar. Donec vestibulum elit sed ultrices scelerisque.';
    this.files = [new TopicFile()];
    this.comments = [new TopicComment(), new TopicComment()]
  }
}
