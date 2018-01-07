/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
class BiLinkNode {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class CharInfo {
    constructor() {
        this.count = 0;
        this.nodes = [];
    }
}

const minWindow = function (s, t) {
    if (!s || s.length === 0 || !t || t.length === 0 || s.length < t.length) {
        return '';
    }
    let map = new Map();
    for (let ch of t) {
        let info = map.get(ch);
        if (!info) {
            info = new CharInfo();
            map.set(ch, info);
        }
        ++info.count;
    }
    let head = null, tail = null, chainLength = 0, curr = 0, minWindow = '';
    while (curr < s.length) {
        if (!map.has(s[curr])) {
            ++curr;
            continue;
        }
        let info = map.get(s[curr]);
        if (info.count > info.nodes.length) {
            let newNode = new BiLinkNode(curr);
            info.nodes.push(newNode);
            if (tail === null) {
                head = tail = newNode;
            } else {
                [tail.next, newNode.prev] = [newNode, tail];
                tail = newNode;
            }
            ++chainLength;
        } else {
            let node = info.nodes.shift();
            node.val = curr;
            info.nodes.push(node);
            if (node !== tail) {
                if (node === head) {
                    head = node.next;
                    head.prev = null;
                } else {
                    [node.prev.next, node.next.prev] = [node.next, node.prev];
                }
                [node.prev, node.next, tail.next] = [tail, null, node];
                tail = node;
            }
        }
        if (chainLength === t.length && (minWindow === '' || tail.val - head.val + 1 < minWindow.length)) {
            minWindow = s.substring(head.val, tail.val + 1);
        }
        ++curr;
    }
    return minWindow;
};

module.exports = minWindow;