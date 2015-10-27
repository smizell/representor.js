import {expect} from 'chai';

import index from '../src/index';
import {Representor} from '../src/representor';

describe('Index', () => {
  it('exports the Representor', () => {
    expect(Representor).to.equal(index.Representor);
  });
});
