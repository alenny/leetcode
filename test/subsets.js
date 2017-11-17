const func = require('../src/subsets');
const assert = require('assert');
describe('subsets', function () {
    describe('#subsets()', function () {
        it('should return 8 subsets when numbers are [1, 2, 3]', function () {
            let ret = func([1, 2, 3]);
            assert.equal(ret.length, 8);
        });
    });
});