const func = require('../src/merge-k-sorted-lists');
const ListNode = require('../src/_utils/list-node');
const assert = require('assert');
describe('merge-k-sorted-lists', function () {
    describe('#mergeKLists()', function () {
        it('should return [5,10,13,17,20,30,31,32,33,35] when lists is [[10,20,30],[5,13,17,35],[31,32,33]]', function () {
            let list0 = new ListNode(10);
            list0.next = new ListNode(20);
            list0.next.next = new ListNode(30);
            let list1 = new ListNode(5);
            list1.next = new ListNode(13);
            list1.next.next = new ListNode(17);
            list1.next.next.next = new ListNode(35);
            let list2 = new ListNode(31);
            list2.next = new ListNode(32);
            list2.next.next = new ListNode(33);
            let ret = func([list0, list1, list2]);
            let expected = [5, 10, 13, 17, 20, 30, 31, 32, 33, 35];
            let pos = 0;
            while (ret) {
                assert.equal(ret.val, expected[pos++]);
                ret = ret.next;
            }
        });
        it('should return [-10,-10,-8,-7,-7,-7,-5,-2,0,1,1,1,2,3,3,4] when lists is [[-8,-7,-7,-5,1,1,3,4],[-2],[-10,-10,-7,0,1,3],[2]]', function () {
            let list0 = new ListNode(-8);
            list0.next = new ListNode(-7);
            list0.next.next = new ListNode(-7);
            list0.next.next.next = new ListNode(-5);
            list0.next.next.next.next = new ListNode(1);
            list0.next.next.next.next.next = new ListNode(1);
            list0.next.next.next.next.next.next = new ListNode(3);
            list0.next.next.next.next.next.next.next = new ListNode(4);
            let list1 = new ListNode(-2);
            let list2 = new ListNode(-10);
            list2.next = new ListNode(-10);
            list2.next.next = new ListNode(-7);
            list2.next.next.next = new ListNode(0);
            list2.next.next.next.next = new ListNode(1);
            list2.next.next.next.next.next = new ListNode(3);
            let list3 = new ListNode(2);
            let ret = func([list0, list1, list2, list3]);
            let expected = [-10, -10, -8, -7, -7, -7, -5, -2, 0, 1, 1, 1, 2, 3, 3, 4];
            let pos = 0;
            while (ret) {
                assert.equal(ret.val, expected[pos++]);
                ret = ret.next;
            }
        });
    });
});