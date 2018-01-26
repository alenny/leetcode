class MyQueue {
    constructor() {
        this.stackPush = [];
        this.stackPop = [];
    }
    /**
     * Push element x to the back of queue. 
     * @param {number} x
     * @return {void}
     */
    push(x) {
        while (this.stackPop.length > 0) {
            this.stackPush.push(this.stackPop.pop());
        }
        this.stackPush.push(x);
    }
    /**
     * Removes the element from in front of queue and returns that element.
     * @return {number}
     */
    pop() {
        while (this.stackPush.length > 0) {
            this.stackPop.push(this.stackPush.pop());
        }
        return this.stackPop.pop();
    }
    /**
     * Get the front element.
     * @return {number}
     */
    peek() {
        while (this.stackPush.length > 0) {
            this.stackPop.push(this.stackPush.pop());
        }
        return this.stackPop[this.stackPop.length - 1];
    }
    /**
     * Returns whether the queue is empty.
     * @return {boolean}
     */
    empty() {
        return this.stackPush.length === 0 && this.stackPop.length === 0;
    }
}

module.exports = MyQueue;
/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

