/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
const splitListToParts = function (root, k) {
    let count = 0;
    let curr = root;
    while (curr) {
        ++count;
        curr = curr.next;
    }
    let nodesPerPart = Math.floor(count / k);
    let extraNodes = count % k;
    let nodesExtraPerPart = nodesPerPart + 1;
    curr = root;
    let ret = [];
    for (let i = 0; i < extraNodes; ++i) {
        curr = makePart(curr, nodesExtraPerPart, ret);
    }
    for (let i = extraNodes; i < k; ++i) {
        if (nodesPerPart === 0) {
            ret.push(null);
        } else {
            curr = makePart(curr, nodesPerPart, ret);
        }
    }
    return ret;
};

function makePart(curr, partLength, ret) {
    let partHead = curr;
    let counter = 1;
    while (counter < partLength) {
        curr = curr.next;
        ++counter;
    }
    let partTail = curr;
    curr = curr.next;
    partTail.next = null;
    ret.push(partHead);
    return curr;
}

module.exports = splitListToParts;