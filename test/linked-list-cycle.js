const func = require('../src/linked-list-cycle');
const ListNode = require('../src/linked-list-cycle/list-node');
const assert = require('assert');
describe('linked-list-cycle', function () {
    describe('#hasCycle()', function () {
        it('should return true when given 1->2->3->2', function () {
            const head = new ListNode(1);
            head.next = new ListNode(2);
            head.next.next = new ListNode(3);
            head.next.next.next = head.next;
            const result = func(head);
            assert.equal(true, result);
        });
    });
});