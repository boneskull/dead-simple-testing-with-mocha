const assert = require('assert');
const {parse} = require('bargs')

it('should throw a TypeError', function() {
  assert.throws(() => {
    parse({
      expectsValue: {}
    }),
    {
      name: 'TypeError',
      message: /object is not iterable/
    }
  });
});

it('should throw a TypeError', function() {
  assert.throws(() => {
    parse({
      expectsValue: 1
    }),
    {
      name: 'TypeError',
      message: /number 1 is not iterable/
    }
  });
})

it('should return an object having property foo: true', function() {
  assert.deepStrictEqual(parse(['--foo']), {_: [], foo: true});
})
