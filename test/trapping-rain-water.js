const func = require('../src/trapping-rain-water');
const assert = require('assert');
describe('trapping-rain-water', function () {
    describe('#trap()', function () {
        it("should return 2 when height is [2,0,2]", function () {
            let ret = func([2, 0, 2]);
            assert.equal(ret, 2);
        });
        it("should return 6 when height is [0,1,0,2,1,0,1,3,2,1,2,1]", function () {
            let ret = func([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
            assert.equal(ret, 6);
        });
    });
});