/**
 * @param {number} capacity
 */

const ListNode = class {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
};

const LRUCache = class {
    constructor(capacity) {
        this.capacity = capacity;
        this.head = null;   // the least recently used node
        this.tail = null;   // the most recently used node
        this.map = new Map();
    }
    markVisited(node) {
        if (node === this.tail) {
            return;
        }
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        if (this.head === node) {
            this.head = node.next;
        }
        node.prev = this.tail;
        node.next = null;
        this.tail.next = node;
        this.tail = node;
    }
    /** 
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const node = this.map.get(key);
        if (!node) {
            return -1;
        }
        this.markVisited(node);
        return node.val;
    }
    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let node = this.map.get(key);
        if (node) {
            node.val = value;
            this.markVisited(node);
        } else {
            // new key
            if (this.map.size >= this.capacity) {
                this.map.delete(this.head.key);
                this.head = this.head.next;
                if (this.head === null) {
                    this.tail = null;
                }
            }
            let newNode = new ListNode(key, value);
            this.map.set(key, newNode);
            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
            }
        }
    }
};

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function (key) {

// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function (key, value) {

// };

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

module.exports = LRUCache;