/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
class RandomListNode {
    constructor(label) {
        this.label = label;
        this.next = this.random = null;
    }
}

const copyRandomList = function (head) {
    if (!head) {
        return null;
    }
    let newHead = new RandomListNode(head.label);
    let pointer = head;
    let nodes = [pointer];
    let newPointer = newHead;
    let newNodes = [newPointer];
    while (pointer.next) {
        pointer = pointer.next;
        nodes.push(pointer);
        newPointer.next = new RandomListNode(pointer.label);
        newPointer = newPointer.next;
        newNodes.push(newPointer);
    }
    for (let i = 0; i < nodes.length; ++i) {
        let count = 0;
        let nd = nodes[i].random;
        while (nd) {
            nd = nd.next;
            ++count;
        }
        if (count === 0) {
            continue;
        }
        newNodes[i].random = newNodes[newNodes.length - count];
    }
    return newHead;
};

module.exports = copyRandomList;