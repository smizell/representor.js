import {Fields} from './fields';

export class Forms {
  constructor() {
    this.forms = [];
  }

  add(formAttributes) {
    const form = new Form(formAttributes);
    this.forms.push(form);
    return form;
  }

  getByName(name) {
    for (const form of this.forms) {
      if (form.name === name) {
        return form;
      }
    }
  }

  toValue() {
    return this.forms.map(form => form.toValue());
  }
}

export class Form {
  constructor({name, href, method}) {
    this.name = name;
    this.href = href;
    this.method = method;
    this.fields = new Fields;
  }

  toValue() {
    return {
      name: this.name,
      href: this.href,
      method: this.method,
      fields: this.fields.toValue(),
    };
  }
}
