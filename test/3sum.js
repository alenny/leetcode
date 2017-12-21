const func = require('../src/3sum');
const assert = require('assert');
describe('3sum', function () {
    describe('#threeSum()', function () {
        it("should return [[-1, 0, 1],[-1, -1, 2]] when numbers are [-1, 0, 1, 2, -1, -4]", function () {
            let ret = func([-1, 0, 1, 2, -1, -4]);
            assert.equal(ret.length, 2);
            assert.deepEqual(ret[0], [-1, -1, 2]);
            assert.deepEqual(ret[1], [-1, 0, 1]);
        });
    });
});