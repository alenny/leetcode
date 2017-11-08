const MinStack = require('../src/min-stack');
const assert = require('assert');
describe('min-stack', function () {
    describe('#MinStack operations', function () {
        it('should return correct elements', function () {
            //let minStack = Object.create(MinStack).createNew();
            let minStack = new MinStack();
            minStack.push(-2);
            minStack.push(0);
            minStack.push(-3);
            assert.equal(minStack.getMin(), -3);
            minStack.pop();
            assert.equal(minStack.top(), 0);
            assert.equal(minStack.getMin(), -2);
        });
    });
});