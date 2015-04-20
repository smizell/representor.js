import { expect } from 'chai';

import { Links } from '../links';

describe('Links', () => {
  context('when initialized', () => {
    var links;

    before(() => {
      links = new Links;
    });

    it('should have a links array', () => {
      expect(Array.isArray(links.links)).to.be.true;
    });
  });

  describe('#add', () => {
    var links;

    before(() => {
      links = new Links;
    });

    context('when adding a link', () => {
      before(() => {
        links.add((link) => {
          link.rel = 'next';
          link.href = 'http://example.com/user/2';
        });
      });

      it('adds a link to the links instance', () => {
        expect(links.links.length).to.equal(1);
      });
    });
  });

  describe('#getByRel', () => {
    var links;

    before(() => {
      links = new Links;
    });

    context('when looking for an existing links', () => {
      var link;

      before(() => {
        links.add((link) => {
          link.rel = 'next';
          link.href = 'http://example.com/user/2';
        });

        link = links.getByRel('next');
      });

      it('returns the correct link', () => {
        expect(link.href).to.equal('http://example.com/user/2');
      });
    });
  });
});
