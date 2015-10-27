import {expect} from 'chai';

import {Embeddeds} from '../src/embeddeds';
import {Forms} from '../src/forms';
import {Links} from '../src/links';
import {Representor} from '../src/representor';

describe('Representor', () => {
  context('when initialized', () => {
    let rep;

    before(() => {
      rep = new Representor;
    });

    it('has the correct properties', () => {
      expect(rep.embeddeds).to.be.instanceOf(Embeddeds);
      expect(rep.forms).to.be.instanceOf(Forms);
      expect(rep.links).to.be.instanceOf(Links);
    });
  });

  describe('#toValue', () => {
    let repValue;

    before(() => {
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
    });

    it('converts to an embedded array', () => {
      expect(repValue).to.deep.equal({
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
              },
            ],
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
      });
    });
  });
});
