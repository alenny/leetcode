const func = require('../../src/_utils/quick-sort');
const assert = require('assert');
describe('quick-sort', function () {
    describe('#quickSort()', function () {
        it('should return [1,2,3,4,5,5,7,8,9] then given [3,7,8,5,2,1,9,5,4]', function () {
            let arr = [3, 7, 8, 5, 2, 1, 9, 5, 4];
            func(arr);
            assert.equal(arr[0], 1);
            assert.equal(arr[1], 2);
            assert.equal(arr[2], 3);
            assert.equal(arr[3], 4);
            assert.equal(arr[4], 5);
            assert.equal(arr[5], 5);
            assert.equal(arr[6], 7);
            assert.equal(arr[7], 8);
            assert.equal(arr[8], 9);
        });
    });
});