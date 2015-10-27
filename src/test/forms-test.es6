import {expect} from 'chai';

import {Forms} from '../forms';

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
    var forms;

    before(() => {
      forms = new Forms;
    });

    context('when looking for an existing forms', () => {
      var changePasswordForm;

      before(() => {
        let form = forms.add({
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
});
