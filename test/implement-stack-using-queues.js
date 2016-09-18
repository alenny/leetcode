var Class = require('../src/implement-stack-using-queues');
var assert = require('assert');
describe('implement-stack-using-queues', function () {
    describe('#Stack()', function () {
        it('should return correct results when executing stack ops', function () {
            var stack = new Class();
            assert.equal(true, stack.empty());
            stack.push(1);
            stack.push(2);
            assert.equal(false, stack.empty());
            assert.equal(2, stack.top());
            assert.equal(2, stack.pop());
            assert.equal(1, stack.top());
            assert.equal(1, stack.pop());
            assert.equal(true, stack.empty());
        });
    });
});