const func = require('../src/implement-strstr');
const assert = require('assert');
describe('implement-strstr', function () {
    describe('#strStr()', function () {
        it('should return 0 then haystack is AAAAABAAABA and needle is AAAA', function () {
            let ret = func('AAAAABAAABA', 'AAAA', false);
            assert.equal(ret, 0);
        });
    });
});