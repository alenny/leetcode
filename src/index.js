/* this file is only used for debug purpose */

const func = require('../src/task-scheduler');
let ret = func(['A', 'A', 'A', 'B', 'B', 'B'], 0);
assert.equal(ret, 6);
