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

The `attributes` property is a JavaScript object.

```javascript
representor.attributes.email = 'john@example.com';
```

### Adding links

```javascript
representor.links.add(function(link) {
  link.rel = 'next';
  link.href = 'http://example.com/users/2';
});
```

### Adding Forms

```javascript
representor.forms.add(function(form) {
  form.name = 'change-password';
  form.href = 'http://example.com/user/2/password';
  form.method = 'POST';

  form.fields.add(function(field) {
    field.name = 'password';
    field.value = 'foobar';
  });
});
```

### Adding Embedded Representors

```javascript
representor.embeddeds.add(function(embedded) {
  embedded.rel = 'next';
  embedded.href = 'http://example.com/users/2';

  embedded.links.add(function(link) {
    link.rel = 'next';
    link.href = 'http://example.com/users/2';
  });

  embedded.forms.add(function(form) {
    form.name = 'change-password';
    form.href = 'http://example.com/user/2/password';
    form.method = 'POST';

    form.fields.add(function(field) {
      field.name = 'password';
      field.value = 'foobar';
    });
  });
})
```
