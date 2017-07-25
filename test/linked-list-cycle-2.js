const func = require('../src/linked-list-cycle-2');
const ListNode = require('../src/linked-list-cycle-2/list-node');
const assert = require('assert');
describe('linked-list-cycle-2', function () {
    describe('#detectCycle()', function () {
        it('should return node of 2 when given 1->2->3->2', function () {
            const head = new ListNode(1);
            head.next = new ListNode(2);
            head.next.next = new ListNode(3);
            head.next.next.next = head.next;
            const result = func(head);
            assert.equal(head.next, result);
        });
    });
});