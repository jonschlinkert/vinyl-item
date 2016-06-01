'use strict';

require('mocha');
var assert = require('assert');
var item = require('./');

describe('vinyl-item', function() {
  it('should export a function', function() {
    assert.equal(typeof item, 'function');
  });

  it('should export an object', function() {
    assert(item);
    assert.equal(typeof item, 'object');
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      item();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected first argument to be a string');
      assert.equal(err.message, 'expected callback to be a function');
      cb();
    }
  });
});
