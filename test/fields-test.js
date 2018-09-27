var expect = require('chai').expect;
var Fields = require('../lib/fields').Fields;

describe('Fields', () => {
  context('when initialized', () => {
    let fields;

    before(() => {
      fields = new Fields;
    });

    it('should have a fields array', () => {
      expect(Array.isArray(fields.fields)).to.be.true;
    });
  });

  describe('#add', () => {
    let fields;

    before(() => {
      fields = new Fields;
    });

    context('when adding a field', () => {
      before(() => {
        fields.add({
          name: 'email',
          value: 'john@example.com',
        });
      });

      it('adds a field to the fields instance', () => {
        expect(fields.fields.length).to.equal(1);
      });
    });
  });

  describe('#getByName', () => {
    let fields;

    before(() => {
      fields = new Fields;
    });

    context('when looking for an existing fields', () => {
      let field;

      before(() => {
        fields.add({
          name: 'email',
          value: 'john@example.com',
        });

        field = fields.getByName('email');
      });

      it('returns the correct field', () => {
        expect(field.name).to.equal('email');
        expect(field.value).to.equal('john@example.com');
      });
    });
  });

  describe('#toValue', () => {
    let fieldValue;

    before(() => {
      const fields = new Fields;
      fields.add({
        name: 'email',
        value: 'john@example.com',
      });
      fieldValue = fields.toValue();
    });

    it('converts the fields to an array', () => {
      expect(fieldValue).to.deep.equal([
        {
          name: 'email',
          value: 'john@example.com',
        },
      ]);
    });
  });
});
