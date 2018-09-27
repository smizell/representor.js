var expect = require('chai').expect;

var Links = require('../lib/links').Links;
var Link = require('../lib/links').Link;

describe('Links Library', () => {
  describe('Links', () => {
    context('when initialized', () => {
      let links;

      before(() => {
        links = new Links;
      });

      it('should have a links array', () => {
        expect(Array.isArray(links.links)).to.be.true;
      });
    });

    describe('#add', () => {
      let links;

      before(() => {
        links = new Links;
      });

      context('when adding a link', () => {
        let link;

        before(() => {
          link = links.add({
            rel: 'next',
            href: 'http://example.com/user/2',
          });
        });

        it('adds a link to the links instance', () => {
          expect(links.links.length).to.equal(1);
        });

        it('has the correct values', () => {
          expect(link.rel).to.equal('next');
          expect(link.href).to.equal('http://example.com/user/2');
        });
      });
    });

    describe('#getByRel', () => {
      let links;

      before(() => {
        links = new Links;
      });

      context('when looking for an existing links', () => {
        let nextLink;

        before(() => {
          links.add({
            rel: 'next',
            href: 'http://example.com/user/2',
          });

          nextLink = links.getByRel('next');
        });

        it('returns the correct link', () => {
          expect(nextLink.href).to.equal('http://example.com/user/2');
        });
      });
    });

    describe('#toValue', () => {
      let linksValue;

      before(() => {
        const links = new Links;

        links.add({
          rel: 'next',
          href: 'http://example.com/user/2',
        });

        linksValue = links.toValue();
      });

      it('returns an array of links', () => {
        expect(linksValue).to.deep.equal([
          {
            rel: 'next',
            href: 'http://example.com/user/2',
          },
        ]);
      });
    });
  });

  describe('Link', () => {
    describe('#toValue', () => {
      let linkValue;

      before(() => {
        const link = new Link({
          rel: 'next',
          href: 'http://example.com/user/2',
        });
        linkValue = link.toValue();
      });

      it('converts the link to an object', () => {
        expect(linkValue).to.deep.equal({
          rel: 'next',
          href: 'http://example.com/user/2',
        });
      });
    });
  });
});
