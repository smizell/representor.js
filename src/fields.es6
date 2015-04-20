export class Fields {
  constructor() {
    this.fields = [];
  }

  add(callback) {
    var field = new Field;
    callback(field);
    this.fields.push(field);
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
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}