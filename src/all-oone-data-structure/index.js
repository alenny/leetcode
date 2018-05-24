class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
        this.keySet = new Set();
    }
}

class AllOne {
    constructor() {
        this.map = new Map();
        this.head = new Node(0);
        this.head.keySet.add('');
        this.tail = new Node(Number.POSITIVE_INFINITY);
        this.tail.keySet.add('');
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    /**
     * Inserts a new key <Key> with value 1. Or increments an existing key by 1. 
     * @param {string} key
     * @return {void}
     */
    inc(key) {
        let node = this.map.get(key);
        if (node) {
            if (node.next.val > node.val + 1) {
                let newNode = new Node(node.val + 1);
                this.insert(newNode, node);
            }
            node.next.keySet.add(key);
            this.map.set(key, node.next);
            node.keySet.delete(key);
            if (node.keySet.size === 0) {
                this.remove(node);
            }
        } else {
            // node not found
            node = this.head.next;
            if (node.val === 1) {
                node.keySet.add(key);
            } else {
                node = new Node(1);
                node.keySet.add(key);
                this.insert(node, this.head);
            }
            this.map.set(key, node);
        }
    }
    /**
     * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. 
     * @param {string} key
     * @return {void}
     */
    dec(key) {
        let node = this.map.get(key);
        if (!node) {
            return;
        }
        if (node.val > 1) {
            if (node.prev.val < node.val - 1) {
                let newNode = new Node(node.val - 1);
                this.insert(newNode, node.prev);
            }
            node.prev.keySet.add(key);
            this.map.set(key, node.prev);
        } else {
            // node.val === 1
            this.map.delete(key);
        }
        node.keySet.delete(key);
        if (node.keySet.size === 0) {
            this.remove(node);
        }
    }
    /**
     * Returns one of the keys with maximal value.
     * @return {string}
     */
    getMaxKey() {
        for (let key of this.tail.prev.keySet.keys()) {
            return key;
        }
    }
    /**
     * Returns one of the keys with minimal value.
     * @return {string}
     */
    getMinKey() {
        for (let key of this.head.next.keySet.keys()) {
            return key;
        }
    }
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    insert(node, prev) {
        prev.next.prev = node;
        node.next = prev.next;
        node.prev = prev;
        prev.next = node;
    }
}

module.exports = AllOne;

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = Object.create(AllOne).createNew()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */