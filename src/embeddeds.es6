import {Forms} from './forms';
import {Links} from './links';

export class Embeddeds {
  constructor() {
    this.embeddeds = [];
  }

  add(embeddedAttributes) {
    var embedded = new Embedded(embeddedAttributes);
    this.embeddeds.push(embedded);
    return embedded;
  }

  getByRel(rel) {
    for (let embedded of this.embeddeds) {
      if (embedded.rel === rel) {
        return embedded;
      }
    }
  }
}

export class Embedded {
  constructor({rel, href}) {
    this.rel = rel
    this.href = href;
    this.attributes = {};
    this.embeddeds = new Embeddeds;
    this.forms = new Forms;
    this.links = new Links;
  }
}
