const func = require('../src/remove-nth-node-from-end');
const assert = require('assert');
const ListNode = require('../src/_utils/list-node');
describe('remove-nth-node-from-end', function () {
    describe('#removeNthFromEnd()', function () {
        it('should return 1->2->3->5 when list is 1->2->3->4->5 and n=2', function () {
            let head = new ListNode(1);
            head.next = new ListNode(2);
            head.next.next = new ListNode(3);
            head.next.next.next = new ListNode(4);
            head.next.next.next.next = new ListNode(5);
            let ret = func(head, 2);
            assert.equal(head.next.next.next.val, 5);
            assert.equal(head.next.next.next.next, null);
        });
    });
});