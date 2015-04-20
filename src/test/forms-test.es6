import { expect } from 'chai';

import { Forms } from '../forms';

describe('Forms', () => {
  context('when initialized', () => {
    var forms;

    before(() => {
      forms = new Forms;
    });

    it('should have a forms array', () => {
      expect(Array.isArray(forms.forms)).to.be.true;
    });
  });

  describe('#add', () => {
    var forms;

    before(() => {
      forms = new Forms;
    });

    context('when adding a form', () => {
      before(() => {
        forms.add((form) => {
          form.name = 'change-password';
          form.href = 'http://example.com/user/2/password';
          form.method = 'POST';
        });
      });

      it('adds a form to the forms instance', () => {
        expect(forms.forms.length).to.equal(1);
      });
    });
  });

  describe('#getByName', () => {
    var forms;

    before(() => {
      forms = new Forms;
    });

    context('when looking for an existing forms', () => {
      var form;

      before(() => {
        forms.add((form) => {
          form.name = 'change-password';
          form.href = 'http://example.com/user/2/password';
          form.method = 'POST';

          form.fields.add((field) => {
            field.name = 'password';
            field.value = 'foobar';
          });
        });

        form = forms.getByName('change-password');
      });

      it('returns the correct form', () => {
        expect(form.href).to.equal('http://example.com/user/2/password');
        expect(form.method).to.equal('POST');
        expect(form.fields.getByName('password').value).to.equal('foobar');
      });
    });
  });
});
