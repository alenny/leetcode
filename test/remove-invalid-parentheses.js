const func = require('../src/remove-invalid-parentheses');
const assert = require('assert');
describe('remove-invalid-parentheses', function () {
    describe('#removeInvalidParentheses()', function () {
        it('should return ["(a)()()", "(a())()"] when s is "(a)())()"', function () {
            let ret = func('(a)())()');
            assert.deepEqual(ret, ["(a)()()", "(a())()"]);
        });
        it('should return [""] when s is ")("', function () {
            let ret = func(')(');
            assert.deepEqual(ret, ['']);
        });
        it('should return ["(r())", "r(())", "(r)()", "r()()"] when s is "(r(()()("', function () {
            let ret = func("(r(()()(");
            assert.deepEqual(ret, ["(r())", "r(())", "(r)()", "r()()"]);
        });
    });
});