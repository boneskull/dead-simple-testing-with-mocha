const assert = require('assert');
const {parse} = require('bargs');

assert.throws(() => {
  parse({
    expectsValue: {}
  }),
  {
    name: 'TypeError',
    message: /object is not iterable/
  }
});
