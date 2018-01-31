class Solution {
    constructor(head) {
        this.head = head;
        this.curr = head;
    }
    /**
     * Returns a random node's value.
     * @return {number}
     */
    getRandom() {
        let steps = Math.random() * 100;
        for (let i = 0; i < steps; ++i) {
            this.curr = this.curr.next;
            if (!this.curr) {
                this.curr = this.head;
            }
        }
        return this.curr.val;
    }
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(head)
 * var param_1 = obj.getRandom()
 */