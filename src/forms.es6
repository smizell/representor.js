import { Fields } from './fields';

export class Forms {
  constructor() {
    this.forms = [];
  }

  add(callback) {
    var form = new Form;
    callback(form);
    this.forms.push(form);
  }

  getByName(name) {
    for (let form of this.forms) {
      if (form.name === name) {
        return form;
      }
    }
  }
}

export class Form {
  constructor(name, href, method) {
    this.name = name
    this.href = href;
    this.method = method;
    this.fields = new Fields;
  }
}
