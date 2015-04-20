export class Links {
  constructor() {
    this.links = [];
  }

  add(callback) {
    var link = new Link;
    callback(link);
    this.links.push(link);
  }

  getByRel(rel) {
    for (let link of this.links) {
      if (link.rel === rel) {
        return link;
      }
    }
  }
}

export class Link {
  constructor(rel, href) {
    this.rel = rel
    this.href = href;
  }
}
