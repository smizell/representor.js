import { expect } from 'chai';

import { Fields } from '../fields';

describe('Fields', () => {
  context('when initialized', () => {
    var fields;

    before(() => {
      fields = new Fields;
    });

    it('should have a fields array', () => {
      expect(Array.isArray(fields.fields)).to.be.true;
    });
  });

  describe('#add', () => {
    var fields;

    before(() => {
      fields = new Fields;
    });

    context('when adding a field', () => {
      before(() => {
        fields.add((field) => {
          field.name = 'email';
          field.href = 'john@example.com';
        });
      });

      it('adds a field to the fields instance', () => {
        expect(fields.fields.length).to.equal(1);
      });
    });
  });

  describe('#getByName', () => {
    var fields;

    before(() => {
      fields = new Fields;
    });

    context('when looking for an existing fields', () => {
      var field;

      before(() => {
        fields.add((field) => {
          field.name = 'email';
          field.value = 'john@example.com';
        });

        field = fields.getByName('email');
      });

      it('returns the correct field', () => {
        expect(field.name).to.equal('email');
        expect(field.value).to.equal('john@example.com');
      });
    });
  });
});
