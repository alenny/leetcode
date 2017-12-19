const func = require('../src/next-permutation');
const assert = require('assert');
describe('next-permutation', function () {
    describe('#nextPermutation()', function () {
        it('should return [1,5,1] when numbers are [1,1,5]', function () {
            let numbers = [1, 1, 5];
            func(numbers);
            assert.equal(numbers[0], 1);
            assert.equal(numbers[1], 5);
            assert.equal(numbers[2], 1);
        });
        it('should return [1,2,3] when numbers are [3,2,1]', function () {
            let numbers = [3, 2, 1];
            func(numbers);
            assert.equal(numbers[0], 1);
            assert.equal(numbers[1], 2);
            assert.equal(numbers[2], 3);
        });
        it('should return [1,3,2] when numbers are [2,1,3]', function () {
            let numbers = [1, 3, 2];
            func(numbers);
            assert.equal(numbers[0], 2);
            assert.equal(numbers[1], 1);
            assert.equal(numbers[2], 3);
        });
    });
});