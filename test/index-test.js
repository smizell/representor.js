var expect = require('chai').expect;
var index = require('../lib/index');
var Representor = require('../lib/representor').Representor;

describe('Index', () => {
  it('exports the Representor', () => {
    expect(Representor).to.equal(index.Representor);
  });
});
