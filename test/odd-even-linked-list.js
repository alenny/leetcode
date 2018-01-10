const func = require('../src/odd-even-linked-list');
const ListNode = require('../src/_utils/list-node');
const assert = require('assert');
describe('odd-even-linked-list', function () {
    describe('#oddEvenList()', function () {
        it('should return [1,3,2] when given [1,2,3]', function () {
            let head = new ListNode(1);
            head.next = new ListNode(2);
            head.next.next = new ListNode(3);
            const ret = func(head);
            assert.equal(ret.val, 1);
            assert.equal(ret.next.val, 3);
            assert.equal(ret.next.next.val, 2);
        });
    });
});