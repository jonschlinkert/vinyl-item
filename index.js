/*!
 * vinyl-item (https://github.com/jonschlinkert/vinyl-item)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var debug = require('debug')('vinyl-item');

module.exports = function(config) {
  return function(app) {
    if (this.isRegistered('vinyl-item')) return;
    debug('initializing "%s", from "%s"', __filename, module.parent.id);

    this.define('item', function() {
      debug('running item');
      
    });
  };
};
