const func = require('../src/delete-node-in-linked-list');
const ListNode = require('../src/_utils/list-node');
const assert = require('assert');
describe('delete-node-in-linked-list', function () {
    describe('#deleteNode()', function () {
        it('should return [1,2,4] when given the 3 of [1,2,3,4]', function () {
            let head = new ListNode(1);
            head.next = new ListNode(2);
            head.next.next = new ListNode(3);
            head.next.next.next = new ListNode(4);
            func(head.next.next);
            assert.equal(head.val, 1);
            assert.equal(head.next.val, 2);
            assert.equal(head.next.next.val, 4);
            assert.equal(head.next.next.next, null);
        });
    });
});