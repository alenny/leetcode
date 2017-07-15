const func = require('../src/merge-two-sorted-lists');
const ListNode = require('../src/merge-two-sorted-lists/list-node');
const assert = require('assert');
describe('merge-two-sorted-lists', function () {
    describe('#merge2SortedLists()', function () {
        function makeLinkedList(arr) {
            let head = null;
            let current = null;
            for (let i = 0; i < arr.length; ++i) {
                if (current) {
                    current.next = new ListNode(arr[i]);
                    current = current.next;
                } else {
                    head = current = new ListNode(arr[i]);
                }
            }
            return head;
        }
        it('should return null when l1 is null and l2 is null', function () {
            const result = func(null, null);
            assert.equal(null, result);
        });
        it('should return l1 when l1 is [1,2] and l2 is null', function () {
            const l1 = makeLinkedList([1, 2]);
            const result = func(l1, null);
            assert.deepEqual(l1, result);
        });
        it('should return [1,2,3,4] when l1 is [1,3] and l2 is [2,4]', function () {
            const l1 = makeLinkedList([1, 3]);
            const l2 = makeLinkedList([2, 4]);
            const result = func(l1, l2);
            assert.equal(1, result.val);
            assert.equal(2, result.next.val);
            assert.equal(3, result.next.next.val);
            assert.equal(4, result.next.next.next.val);
            assert.equal(null, result.next.next.next.next);
        });
    });
});