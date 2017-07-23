const func = require('../src/generate-parentheses');
const assert = require('assert');
describe('generate-parentheses', function () {
    describe('#generateParenthesis()', function () {
        it('should return 5 results when n is 3', function () {
            const result = func(3);
            assert.equal(5, result.length);
            assert.equal('((()))', result[0]);
            assert.equal('(()())', result[1]);
            assert.equal('(())()', result[2]);
            assert.equal('()(())', result[3]);
            assert.equal('()()()', result[4]);
        });
    });
});