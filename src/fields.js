export class Fields {
  constructor() {
    this.fields = [];
  }

  add(fieldAttributes) {
    const field = new Field(fieldAttributes);
    this.fields.push(field);
    return field;
  }

  getByName(name) {
    for (const field of this.fields) {
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
