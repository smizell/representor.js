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
}
