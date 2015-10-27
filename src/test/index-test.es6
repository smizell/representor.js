import {expect} from 'chai';

import index from '../index';
import {Representor} from '../representor';

describe('Index', () => {
  it('exports the Representor', () => {
    expect(Representor).to.equal(index.Representor);
  });
});
