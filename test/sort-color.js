const func = require('../src/sort-color');
const assert = require('assert');
describe('sort-color', function () {
    describe('#sortColors()', function () {
        it('should return [0,0,0,1,1,1,2,2,2] when nums is [2,1,0,2,1,0,2,1,0]', function () {
            let nums = [2, 1, 0, 2, 1, 0, 2, 1, 0];
            func(nums);
            assert.deepEqual(nums, [0, 0, 0, 1, 1, 1, 2, 2, 2]);
        });
    });
});