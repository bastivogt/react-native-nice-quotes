import { uniqueID } from "../helpers/help";
export class Quote {
  constructor(text, author = "Unkown") {
    this.id = uniqueID();
    this.text = text;
    this.author = author;
  }

  toString() {
    return `Quote(id: ${this.id}, text: ${this.text}, author: ${this.author})`;
  }
}
