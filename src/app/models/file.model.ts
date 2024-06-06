export class TopicFile {
  titre: string;
  type: string;
  content: string;

  constructor() {
    this.titre = 'file-name1';
    this.type = 'ts';
    this.content = 'if (blabla == "my test" { ' +
      ' \n //do something \n}'
  }
}
