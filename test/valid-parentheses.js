const func = require('../src/valid-parentheses');
const assert = require('assert');
describe('valid-parentheses', function () {
    describe('#validParentheses()', function () {
        it('should return true when s is \'\'', function () {
            const result = func('');
            assert.equal(true, result);
        });
        it('should return false when s is \'[(])\'', function () {
            const result = func('[(])');
            assert.equal(false, result);
        });
        it('should return true when s is \'()[]{}\'', function () {
            const result = func('()[]{}');
            assert.equal(true, result);
        });
    });
});