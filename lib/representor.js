var Embeddeds = require('./embeddeds').Embeddeds;
var Forms = require('./forms').Forms;
var Links = require('./links').Links;


class Representor {
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

module.exports = { Representor };
