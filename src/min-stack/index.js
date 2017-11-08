class StackNode {
    constructor(val, currentMin) {
        this.val = val;
        this.currentMin = currentMin;
    }
}

class MinStack {
    constructor() {
        this.stack = [];
    }
    push(val) {
        let currentMin;
        if (this.stack.length === 0) {
            currentMin = val;
        } else {
            let previousMin = this.stack[this.stack.length - 1].currentMin;
            currentMin = Math.min(previousMin, val);
        }
        this.stack.push(new StackNode(val, currentMin));
    }
    pop() {
        this.stack.pop();
    }
    top() {
        return this.stack.length > 0 ? this.stack[this.stack.length - 1].val : undefined;
    }
    getMin() {
        return this.stack.length > 0 ? this.stack[this.stack.length - 1].currentMin : undefined;
    }
}

module.exports = MinStack;

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */