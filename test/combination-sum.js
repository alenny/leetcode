const func = require('../src/combination-sum');
const assert = require('assert');
describe('combination-sum', function () {
    describe('#combinationSum()', function () {
        it('should return [[7],[2, 2, 3]] when candidates are [2, 3, 6, 7] and target is 7', function () {
            let ret = func([2, 3, 6, 7], 7);
            assert.equal(ret.length, 2);
            assert.equal(ret[0][0], 7);
            assert.equal(ret[1][0], 3);
            assert.equal(ret[1][1], 2);
            assert.equal(ret[1][2], 2);
        });
    });
});