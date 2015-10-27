import {Embeddeds} from './embeddeds';
import {Forms} from './forms';
import {Links} from './links';

export class Representor {
  constructor() {
    this.attributes = {};
    this.embeddeds = new Embeddeds;
    this.forms = new Forms;
    this.links = new Links;
  }

  toValue() {
    return {
      attributes: this.attributes,
      embeddeds: this.embeddeds.toValue(),
      forms: this.forms.toValue(),
      links: this.links.toValue(),
    };
  }
}
