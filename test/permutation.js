const func = require('../src/permutation');
const assert = require('assert');
describe('permutation', function () {
    describe('#permute()', function () {
        it('should return 6 elements when given [1,2,3]', function () {
            let result = func([1, 2, 3]);
            assert.equal(result.length, 6);
        });
    });
});