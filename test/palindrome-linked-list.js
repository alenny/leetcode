const func = require('../src/palindrome-linked-list');
const ListNode = require('../src/palindrome-linked-list/list-node');
const assert = require('assert');
describe('palindrome-linked-list', function () {
    describe('#isPalindrome()', function () {
        it('should return true when given []', function () {
            const result = func(null);
            assert.equal(true, result);
        });
        it('should return true when given [1]', function () {
            const head = new ListNode(1);
            const result = func(head);
            assert.equal(true, result);
        });
        it('should return true when given [1,2,2,1]', function () {
            const head = new ListNode(1);
            head.next = new ListNode(2);
            head.next.next = new ListNode(2);
            head.next.next.next = new ListNode(1);
            const result = func(head);
            assert.equal(true, result);
        });
    });
});