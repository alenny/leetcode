var func = require('../src/add-two-numbers');
var ListNode = require('../src/add-two-numbers/list-node');
var assert = require('assert');
describe('add-two-numbers', function () {
    describe('#addTwoNumbers()', function () {
        function makeLinkedList(arr) {
            var head = null;
            var current = null;
            for (var i = 0; i < arr.length; ++i) {
                if (current) {
                    current.next = new ListNode(arr[i]);
                    current = current.next;
                } else {
                    head = current = new ListNode(arr[i]);
                }
            }
            return head;
        }
        it('should return (7 -> 0 -> 8) when inputs are (2 -> 4 -> 3) and (5 -> 6 -> 4)', function () {
            var l1 = makeLinkedList([2, 4, 3]);
            var l2 = makeLinkedList([5, 6, 4]);
            var exp = makeLinkedList([7, 0, 8]);
            var result = func(l1, l2);
            assert.deepEqual(exp, result);
        });
        it('should return (0 -> 1) when inputs are (5) and (5)', function () {
            var l1 = makeLinkedList([5]);
            var l2 = makeLinkedList([5]);
            var exp = makeLinkedList([0, 1]);
            var result = func(l1, l2);
            assert.deepEqual(exp, result);
        });
    });
});