const func = require('../src/reverse-linked-list');
const ListNode = require('../src/reverse-linked-list/list-node');
const assert = require('assert');
describe('reverse-linked-list', function () {
    describe('#reverseList()', function () {
        it('should return [3,2,1] when given [1,2,3]', function () {
            const head = new ListNode(1);
            head.next = new ListNode(2);
            head.next.next = new ListNode(3);
            const result = func(head);
            assert.equal(3, result.val);
            assert.equal(2, result.next.val);
            assert.equal(1, result.next.next.val);
        });
    });
});