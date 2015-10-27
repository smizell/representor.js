export class Fields {
  constructor() {
    this.fields = [];
  }

  add(fieldAttributes) {
    var field = new Field(fieldAttributes);
    this.fields.push(field);
    return field;
  }

  getByName(name) {
    for (let field of this.fields) {
      if (field.name === name) {
        return field;
      }
    }
  }
}

export class Field {
  constructor({name, value}) {
    this.name = name;
    this.value = value;
  }
}
