var expect = require('chai').expect;
var Embeddeds = require('../lib/embeddeds').Embeddeds;
var Forms = require('../lib/forms').Forms;
var Links = require('../lib/links').Links;

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

  describe('#toValue', () => {
    let embeddedValue;

    before(() => {
      const embeddeds = new Embeddeds;
      embeddeds.add({
        rel: 'next',
        href: 'http://example.com/user/2',
      });
      embeddedValue = embeddeds.toValue();
    });

    it('converts to an embedded array', () => {
      expect(embeddedValue).to.deep.equal([
        {
          rel: 'next',
          href: 'http://example.com/user/2',
          attributes: {},
          links: [],
          forms: [],
          embeddeds: [],
        },
      ]);
    });
  });
});
