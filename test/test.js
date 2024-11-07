var main = require('../index');
var assert = require('assert');
describe('Regular fibonacci value', function() {
    it('should return 5 for Fib(5)', function() {
        assert.strictEqual(main.fibonacci(5), 5);
      });
});

describe('First two terms', function() {
  it('should return 0 and 1 for first two terms', function() {
      assert.strictEqual(main.fibonacci(0), 0);
      assert.strictEqual(main.fibonacci(1), 1);
    });
});

describe('Negative Tests', function() {
  it('should throw an error for negative inputs', function() {
      assert.throws(() => main.fibonacci(-1), Error, "Expected an error for negative input");
  });

  it('should throw an error for non-integer inputs', function() {
      assert.throws(() => main.fibonacci(0.5), Error, "Expected an error for non-integer input");
  });
});