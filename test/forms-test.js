var expect = require('chai').expect;
var Forms = require('../lib/forms').Forms;

describe('Forms', () => {
  context('when initialized', () => {
    let forms;

    before(() => {
      forms = new Forms;
    });

    it('should have a forms array', () => {
      expect(Array.isArray(forms.forms)).to.be.true;
    });
  });

  describe('#add', () => {
    let forms;

    before(() => {
      forms = new Forms;
    });

    context('when adding a form', () => {
      before(() => {
        forms.add({
          name: 'change-password',
          href: 'http://example.com/user/2/password',
          method: 'POST',
        });
      });

      it('adds a form to the forms instance', () => {
        expect(forms.forms.length).to.equal(1);
      });
    });
  });

  describe('#getByName', () => {
    let forms;

    before(() => {
      forms = new Forms;
    });

    context('when looking for an existing forms', () => {
      let changePasswordForm;

      before(() => {
        const form = forms.add({
          name: 'change-password',
          href: 'http://example.com/user/2/password',
          method: 'POST',
        });

        form.fields.add({
          name: 'password',
          value: 'foobar',
        });

        changePasswordForm = forms.getByName('change-password');
      });

      it('returns the correct form', () => {
        expect(changePasswordForm.href).to.equal('http://example.com/user/2/password');
        expect(changePasswordForm.method).to.equal('POST');
        expect(changePasswordForm.fields.getByName('password').value).to.equal('foobar');
      });
    });
  });

  describe('#toValue', () => {
    let formValue;

    before(() => {
      const forms = new Forms;
      const changePasswordForm = forms.add({
        name: 'change-password',
        href: 'http://example.com/user/2/password',
        method: 'POST',
      });

      changePasswordForm.fields.add({
        name: 'password',
        value: 'foobar',
      });

      formValue = forms.toValue();
    });

    it('converts the form to an array', () => {
      expect(formValue).to.deep.equal([
        {
          name: 'change-password',
          href: 'http://example.com/user/2/password',
          method: 'POST',
          fields: [
            {
              name: 'password',
              value: 'foobar',
            },
          ],
        },
      ]);
    });
  });
});
