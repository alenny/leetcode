const func = require('../src/sort-list');
const ListNode = require('../src/_utils/list-node');
const assert = require('assert');
describe('sort-list', function () {
    describe('#sortList()', function () {
        it('should return [] when numbers are []', function () {
            let ret = func(null);
            assert.equal(ret, null);
        });
        it('should return [1,2] when numbers are [2,1]', function () {
            let head = new ListNode(2);
            head.next = new ListNode(1);
            let ret = func(head);
            assert.equal(ret.val, 1);
            assert.equal(ret.next.val, 2);
        });
        it('should return [1,2,3,4,5] when numbers are [5,4,3,2,1]', function () {
            let head = new ListNode(5);
            head.next = new ListNode(4);
            head.next.next = new ListNode(3);
            head.next.next.next = new ListNode(2);
            head.next.next.next.next = new ListNode(1);
            let ret = func(head);
            assert.equal(ret.val, 1);
            assert.equal(ret.next.val, 2);
            assert.equal(ret.next.next.val, 3);
            assert.equal(ret.next.next.next.val, 4);
            assert.equal(ret.next.next.next.next.val, 5);
        });
    });
});