/* this file is only used for debug purpose */

const func = require('../src/target-sum');
const assert = require('assert');
let ret = func([1, 1, 1, 1, 1], 3);
assert.equal(ret, 5);
