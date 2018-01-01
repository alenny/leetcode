const func = require('../src/count-smaller-numbers-after-self');
const assert = require('assert');
describe('count-smaller-numbers-after-self', function () {
    describe('#countSmaller()', function () {
        it('should return [2, 1, 1, 0] when numbers is [5, 2, 6, 1]', function () {
            let ret = func([5, 2, 6, 1]);
            assert.deepEqual(ret, [2, 1, 1, 0]);
        });
        it('should return [1,0] when numbers is [-1,-2]', function () {
            let ret = func([-1, -2]);
            assert.deepEqual(ret, [1, 0]);
        });
        it('should return [2,0,0] when numbers is [2,0,1]', function () {
            let ret = func([2, 0, 1]);
            assert.deepEqual(ret, [2, 0, 0]);
        });
    });
});