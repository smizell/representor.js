import { expect } from 'chai';

import { Embeddeds } from '../embeddeds';
import { Forms } from '../forms';
import { Links } from '../links';
import { Representor } from '../representor';

describe('Representor', () => {
  context('when initialized', () => {
    var rep;

    before(() => {
      rep = new Representor;
    });

    it('has the correct properties', () => {
      expect(rep.embeddeds).to.be.instanceOf(Embeddeds);
      expect(rep.forms).to.be.instanceOf(Forms);
      expect(rep.links).to.be.instanceOf(Links);
    });
  });
});
