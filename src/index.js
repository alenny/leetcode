/* for debug only */

var func = require('../src/range-sum-query-mutable');
var numArray = new func([9, -8]);
numArray.update(0, 3);
var result = numArray.sumRange(1, 1);
