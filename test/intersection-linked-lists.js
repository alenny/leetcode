const func = require('../src/intersection-linked-lists');
const ListNode = require('../src/intersection-linked-lists/list-node');
const assert = require('assert');
describe('intersection-linked-lists', function () {
    describe('#getIntersectionNode()', function () {
        it('should return node of 3 when given [1,2,3,4] and [7,6,5,3,4]', function () {
            const headA = new ListNode(1);
            headA.next = new ListNode(2);
            headA.next.next = new ListNode(3);
            headA.next.next.next = new ListNode(4);
            const headB = new ListNode(7);
            headB.next = new ListNode(6);
            headB.next.next = new ListNode(5);
            headB.next.next.next = headA.next.next;
            headB.next.next.next.next = headA.next.next.next;
            const result = func(headA, headB);
            assert.equal(headA.next.next, result);
        });
    });
});