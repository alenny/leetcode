const func = require('../src/find-duplicate-number');
const assert = require('assert');
describe('find-duplicate-number', function () {
    describe('#findDuplicate()', function () {
        it('should return 2 when numbers are [3,1,4,2,5,2]', function () {
            let ret = func([3, 1, 4, 2, 5, 2]);
            assert.equal(ret, 2);
        });
    });
});