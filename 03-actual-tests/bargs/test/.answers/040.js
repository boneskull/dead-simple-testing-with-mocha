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

assert.throws(() => {
  parse({
    expectsValue: 1
  }),
  {
    name: 'TypeError',
    message: /number 1 is not iterable/
  }
});
