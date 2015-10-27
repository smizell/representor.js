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
});
