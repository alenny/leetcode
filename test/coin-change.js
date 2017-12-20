const func = require('../src/coin-change');
const assert = require('assert');
describe('coin-change', function () {
    describe('#coinChange()', function () {
        it("should return 3 when coins are [1, 2, 5] and amount is 11", function () {
            let ret = func([1, 2, 5], 11);
            assert.equal(ret, 3);
        });
        it("should return -1 when coins are [2] and amount is 3", function () {
            let ret = func([2], 3);
            assert.equal(ret, -1);
        });
    });
});