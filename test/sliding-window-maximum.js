const func = require('../src/sliding-window-maximum');
const assert = require('assert');
describe('sliding-window-maximum', function () {
    describe('#maxSlidingWindow()', function () {
        it("should return [3,3,5,5,6,7] when numbers is [1,3,-1,-3,5,3,6,7] and k is 3", function () {
            let ret = func([1, 3, -1, -3, 5, 3, 6, 7], 3);
            assert.deepEqual(ret, [3, 3, 5, 5, 6, 7]);
        });
        it("should return [3,3,5,5,6,7] when numbers is [9,10,9,-7,-4,-8,2,-6] and k is 5", function () {
            let ret = func([9, 10, 9, -7, -4, -8, 2, -6], 5);
            assert.deepEqual(ret, [10, 10, 9, 2]);
        });
    });
});