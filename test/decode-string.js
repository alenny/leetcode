const func = require('../src/decode-string');
const assert = require('assert');
describe('decode-string', function () {
    describe('#decodeString()', function () {
        it('should return accaccacc when s is 3[a2[c]]', function () {
            let ret = func('3[a2[c]]');
            assert.equal(ret, 'accaccacc');
        });
        it('should return abcabccdcdcdef when s is 2[abc]3[cd]ef', function () {
            let ret = func('2[abc]3[cd]ef');
            assert.equal(ret, 'abcabccdcdcdef');
        });
    });
});