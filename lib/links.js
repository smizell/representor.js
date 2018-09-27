class Links {
  constructor() {
    this.links = [];
  }

  add(linkAttributes) {
    const link = new Link(linkAttributes);
    this.links.push(link);
    return link;
  }

  getByRel(rel) {
    for (const link of this.links) {
      if (link.rel === rel) {
        return link;
      }
    }
  }

  toValue() {
    return this.links.map(link => {
      return link.toValue();
    });
  }
}

class Link {
  constructor({ rel, href }) {
    this.rel = rel;
    this.href = href;
  }

  toValue() {
    return {
      rel: this.rel,
      href: this.href,
    };
  }
}

module.exports = { Links, Link };
