const func = require('../src/evaluate-reverse-polish-notation');
const assert = require('assert');
describe('evaluate-reverse-polish-notation', function () {
    describe('#evalRPN()', function () {
        it('should return 22 when given ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]', function () {
            let ret = func(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);
            assert.equal(ret, 22);
        });
    });
});