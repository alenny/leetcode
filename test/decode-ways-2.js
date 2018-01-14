const func = require('../src/decode-ways-2');
const assert = require('assert');
describe('decode-ways-2', function () {
    describe('#numDecodings()', function () {
        it('should return 96 when s is "**"', function () {
            let ret = func("**");
            assert.equal(ret, 96);
        });
        it('should return 104671669 when s is "********************"', function () {
            let ret = func("********************");
            assert.equal(ret, 104671669);
        });
    });
});