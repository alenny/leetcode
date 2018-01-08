const func = require('../src/count-and-say');
const assert = require('assert');
describe('count-and-say', function () {
    describe('#countAndSay()', function () {
        it('should return 1211 when given 4', function () {
            const ret = func(4);
            assert.equal(ret, '1211');
        });
    });
});