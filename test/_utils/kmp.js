const func = require('../../src/_utils/kmp');
const assert = require('assert');
describe('kmp', function () {
    describe('#kmp()', function () {
        it('should return [0,1] then text is AAAAABAAABA and pattern is AAAA', function () {
            let ret = func('AAAAABAAABA', 'AAAA', false);
            assert.deepEqual(ret, [0, 1]);
        });
        it('should return [0] then text is AAAAABAAABA and pattern is AAAA and onlyFirst is true', function () {
            let ret = func('AAAAABAAABA', 'AAAA', true);
            assert.deepEqual(ret, [0]);
        });
    });
});