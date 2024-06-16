export class TopicComment {
  public topicID: number;
  public comment_user: string;
  public comment_content: string;
  public comment_date: string;

  constructor() {
    this.topicID = 1;
    this.comment_user = 'Atlas Corrigan';
    this.comment_content = 'On peut améliorer. Il faudrait blablabablablalbalbalbalbalbalbalbalba'
    + '\n Praesent id velit nec sem egestas venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut arcu aliquam, bibendum mi sit amet, sodales velit. Sed gravida ultrices porttitor. Praesent id velit nec sem egestas venenatis.'
    this.comment_date = new Date().toLocaleDateString();
  }
}


