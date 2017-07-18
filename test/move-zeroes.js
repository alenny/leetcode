const func = require('../src/move-zeroes');
const assert = require('assert');
describe('move-zeroes', function () {
    describe('#moveZeroes()', function () {
        it('should change nums to [1, 3, 12, 0, 0] when nums is [0, 1, 0, 3, 12]', function () {
            const nums = [0, 1, 0, 3, 12];
            const result = func(nums);
            assert.equal(5, nums.length);
            assert.equal(1, nums[0]);
            assert.equal(3, nums[1]);
            assert.equal(12, nums[2]);
            assert.equal(0, nums[3]);
            assert.equal(0, nums[4]);
        });
    });
});