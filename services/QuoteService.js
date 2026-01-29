import { BaseService } from "./BaseService";
import { uniqueID as uid } from "../helpers/help";

export class QuoteService extends BaseService {
  constructor(count = 0) {
    super();
    this.onQuoteUpdate;
    this._quotes = [
      {
        id: uid(),
        text: "Quote 1",
        author: "Author 1",
      },

      {
        id: uid(),
        text: "Quote 2",
        author: "Author 2",
      },

      {
        id: uid(),
        text: "Quote 3",
        author: "Author 3",
      },
    ];

    this._count = count;
  }

  _emitQuoteUpdate() {
    if (typeof this.onQuoteUpdate === "function") {
      this.onQuoteUpdate(this._quotes);
    }
  }

  get quotes() {
    return [...this._quotes];
  }

  get count() {
    return this._count;
  }

  hasNextQuote() {
    if (this._count < this._quotes.length - 1) {
      return true;
    }
    return false;
  }

  hasPrevQuote() {
    if (this._count > 0 && this._count !== this._quotes.lenght - 1) {
      return true;
    }
    return false;
  }

  nextQuote() {
    if (this.hasNextQuote()) {
      this._count++;
      this._emitUpdate();
      return this._quotes[this._count];
    }
    this._count = 0;
    this._emitUpdate();
    return this._quotes[this._count];
  }

  prevQuote() {
    if (this.hasPrevQuote()) {
      this._count--;
      this._emitUpdate();
      return this._quotes[this._count];
    }
    this._count = this._quotes.length - 1;
    this._emitUpdate();
    return this._quotes[this._count];
  }

  getCurrentQuote() {
    return this._quotes[this._count];
  }

  getQuoteByIndex(index) {
    if (index >= 0 && index < this._quotes.length) {
      return this._quotes[index];
    }
    return false;
  }

  addQuote(text, author = "Unkown") {
    const newQuote = { id: uid(), text: text, author: author };
    this._quotes.push(newQuote);
    this._emitUpdate();
    this._emitQuoteUpdate();
    return newQuote;
  }

  removeQuote(id) {
    const index = this._quotes.findIndex((item) => {
      console.log(item.id);
      return item.id === id;
    });
    console.log("REMOVE_QUOTE index:", index);
    if (index !== -1) {
      this._quotes.splice(index, 1);
      this._emitUpdate();
      this._emitQuoteUpdate();
      return true;
    }
    return false;
  }

  updateQuote(id, text, author) {
    const index = this._quotes.findIndex((quote) => quote.id === id);
    console.log("UPDATE_QUOTE index:", index);
    if (index !== -1) {
      this._quotes[index].text = text;
      this._quotes[index].author = author;
      this._emitUpdate();
      this._emitQuoteUpdate();
      return true;
    }
    return false;
  }
}
