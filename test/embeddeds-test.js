import {expect} from 'chai';

import {Embeddeds} from '../src/embeddeds';
import {Forms} from '../src/forms';
import {Links} from '../src/links';

describe('Embeddeds', () => {
  context('when initialized', () => {
    let embeddeds;

    before(() => {
      embeddeds = new Embeddeds;
    });

    it('should have a embeddeds array', () => {
      expect(Array.isArray(embeddeds.embeddeds)).to.be.true;
    });
  });

  describe('#add', () => {
    let embeddeds;

    before(() => {
      embeddeds = new Embeddeds;
    });

    context('when adding an embedded', () => {
      before(() => {
        embeddeds.add({
          rel: 'next',
          href: 'http://example.com/user/2',
        });
      });

      it('adds a embedded to the embeddeds instance', () => {
        expect(embeddeds.embeddeds.length).to.equal(1);
      });
    });
  });

  describe('#getByRel', () => {
    let embeddeds;

    before(() => {
      embeddeds = new Embeddeds;
    });

    context('when looking for an existing embeddeds', () => {
      let embedded;

      before(() => {
        embeddeds.add({
          rel: 'next',
          href: 'http://example.com/user/2',
        });

        embedded = embeddeds.getByRel('next');
      });

      it('returns the correct embedded', () => {
        expect(embedded.href).to.equal('http://example.com/user/2');
      });

      it('has the correct properties', () => {
        expect(embedded.embeddeds).to.be.instanceOf(Embeddeds);
        expect(embedded.forms).to.be.instanceOf(Forms);
        expect(embedded.links).to.be.instanceOf(Links);
      });
    });
  });
});
