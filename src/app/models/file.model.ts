export class TopicFile {
  public topicID: number;
  public file_title: string;
  public file_type: string;
  public file_content: string;
  public file_date: string;

  constructor() {
    this.topicID = 1;
    this.file_title = 'file-name1';
    this.file_type = 'ts';
    this.file_content = 'if (blabla == "my test" { \n //do something \n}';
    this.file_date = '21.03.1973';
  }
}
