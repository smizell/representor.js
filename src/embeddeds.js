import {Forms} from './forms';
import {Links} from './links';

export class Embeddeds {
  constructor() {
    this.embeddeds = [];
  }

  add(embeddedAttributes) {
    const embedded = new Embedded(embeddedAttributes);
    this.embeddeds.push(embedded);
    return embedded;
  }

  getByRel(rel) {
    for (const embedded of this.embeddeds) {
      if (embedded.rel === rel) {
        return embedded;
      }
    }
  }

  toValue() {
    return this.embeddeds.map(embedded => embedded.toValue());
  }
}

export class Embedded {
  constructor({rel, href}) {
    this.rel = rel;
    this.href = href;
    this.attributes = {};
    this.embeddeds = new Embeddeds;
    this.forms = new Forms;
    this.links = new Links;
  }

  toValue() {
    return {
      rel: this.rel,
      href: this.href,
      attributes: this.attributes,
      embeddeds: this.embeddeds.toValue(),
      forms: this.forms.toValue(),
      links: this.links.toValue(),
    };
  }
}
