export class TopicComment {
  public username: string;
  public content: string;
  public date: string;

  constructor() {
    this.username = 'Atlas Corrigan';
    this.content = 'On peut améliorer. Il faudrait blablabablablalbalbalbalbalbalbalbalba'
    + '\n Praesent id velit nec sem egestas venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut arcu aliquam, bibendum mi sit amet, sodales velit. Sed gravida ultrices porttitor. Praesent id velit nec sem egestas venenatis.'
    this.date = new Date().toLocaleDateString();
  }
}


