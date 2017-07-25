/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycleSlow = function (head) {
    // reverse links to get the node count
    let { newHead, length } = reverseLinkedList(head);

    // reverse again to recover original links
    reverseLinkedList(newHead);

    // check if it has circle
    if (head !== newHead) {
        return null;    // no circle
    }

    // try to find the start node of the circle
    let start = head;
    while (start) {
        let curr = start;
        for (let i = 0; i < length; ++i) {
            if (curr.next === start) {
                return start;
            }
            curr = curr.next;
        }
        start = start.next;
        --length;
    }
    return null;
};

const reverseLinkedList = function (head) {
    let curr = head;
    let previous = null;
    let length = 0;
    while (curr) {
        const temp = curr.next;
        curr.next = previous;
        previous = curr;
        curr = temp;
        ++length;
    }
    return { newHead: previous, length };
};

const detectCycle = function (head) {
    if (!head) {
        return null;
    }

    // p1 steps 1 node at a time; p2 steps 2 nodes at a time.
    // try to find the first meeting node of p1 and p2
    let p1 = head, p2 = head;
    do {
        p1 = p1.next;
        if (!p1) {
            return null;
        }
        for (let i = 0; i < 2; ++i) {
            p2 = p2.next;
            if (!p2) {
                return null;
            }
        }
    } while (p1 !== p2)

    // let p1 steps 1 from head; p2 steps 1 from the first meeting node.
    // then p1 and p2 will meet at the circle start node.
    p1 = head;
    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
};

module.exports = detectCycle;