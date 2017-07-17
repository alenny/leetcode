const func = require('../src/find-all-numbers-disappeared');
const assert = require('assert');
describe('find-all-numbers-disappeared', function () {
    describe('#findDisappearedNumbers()', function () {
        it('should return [5,6] when nums is [4,3,2,7,8,2,3,1]', function () {
            const result = func([4, 3, 2, 7, 8, 2, 3, 1]);
            assert.equal(2, result.length);
            assert.equal(5, result[0]);
            assert.equal(6, result[1]);
        });
    });
});