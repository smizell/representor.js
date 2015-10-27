# Representor

Library for building and using representors.

## Install

```sh
npm install representor --save
```

## Usage

### Creating a Representor

Create a new instance of the representor.

```javascript
var representor = new Representor;
```

### Adding Attributes

The `attributes` property is a JavaScript object literal.

```javascript
representor.attributes.email = 'john@example.com';
```

### Adding links

```javascript
representor.links.add({
  rel: 'next',
  href: 'http://example.com/users/2',
});
```

### Adding Forms

```javascript
let changePasswordForm = representor.forms.add({
  name: 'change-password',
  href: 'http://example.com/user/2/password',
  method: 'POST',
});

form.fields.add({
  name: 'password',
  value: 'foobar',
});
```

### Adding Embedded Representors

```javascript
let embedded = representor.embeddeds.add({
  rel: 'next',
  href: 'http://example.com/users/2',
});

embedded.links.add({
  rel: 'next',
  href: 'http://example.com/users/2',
});

let changePasswordForm = embedded.forms.add({
  name: 'change-password',
  href: 'http://example.com/user/2/password',
  method: 'POST',
});

changePasswordForm.fields.add(function(field) {
  name: 'password',
  value: 'foobar',
});
```

### Converting to an Object Literal

Each object has its own `#toValue` function that may be called to output an object literal.

```js
const rep = new Representor;

rep.links.add({
  rel: 'next',
  href: 'http://example.com/user/2',
});

const changePasswordForm = rep.forms.add({
  name: 'change-password',
  href: 'http://example.com/user/2/password',
  method: 'POST',
});

changePasswordForm.fields.add({
  name: 'password',
  value: 'foobar',
});

rep.embeddeds.add({
  rel: 'next',
  href: 'http://example.com/user/3',
});

repValue = rep.toValue();

// repValue above deep equals objLiteral here
const objLiteral = {
  attributes: {},
  links: [
    {
      rel: 'next',
      href: 'http://example.com/user/2',
    },
  ],
  forms: [
    {
      name: 'change-password',
      href: 'http://example.com/user/2/password',
      method: 'POST',
      fields: [
        {
          name: 'password',
          value: 'foobar',
        }
      ]
    },
  ],
  embeddeds: [
    {
      rel: 'next',
      href: 'http://example.com/user/3',
      attributes: {},
      links: [],
      forms: [],
      embeddeds: [],
    },
  ],
};
```
