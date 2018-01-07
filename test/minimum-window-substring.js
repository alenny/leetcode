const func = require('../src/minimum-window-substring');
const assert = require('assert');
describe('minimum-window-substring', function () {
    describe('#minWindow()', function () {
        it('should return BANC when S is ADOBECODEBANC and T is ABC', function () {
            const ret = func('ADOBECODEBANC', 'ABC');
            assert.equal(ret, 'BANC');
        });
        it('should return aa when S is aa and T is aa', function () {
            const ret = func('aa', 'aa');
            assert.equal(ret, 'aa');
        });
    });
});