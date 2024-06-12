export class TopicFile {
  file_title: string;
  file_type: string;
  file_content: string;
  file_date: string;

  constructor() {
    this.file_title = 'file-name1';
    this.file_type = 'ts';
    this.file_content = 'if (blabla == "my test" { \n //do something \n}';
    this.file_date = '21.03.1973';
  }
}
