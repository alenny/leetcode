/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
class NestedIterator {
    constructor(nestedList) {
        this.listStack = [];
        this.indexStack = [];
        if (nestedList.length === 0) {
            return;
        }
        this.listStack.push(nestedList);
        this.indexStack.push(0);
        this.goToNextAvailable(nestedList[0]);
    }
    /**
     * @this NestedIterator
     * @returns {boolean}
     */
    hasNext() {
        return this.indexStack.length > 0;
    }
    /**
     * @this NestedIterator
     * @returns {integer}
     */
    next() {
        let ret = this.listStack[this.listStack.length - 1][this.indexStack[this.indexStack.length - 1]].getInteger();
        while (this.indexStack.length > 0 && this.indexStack[this.indexStack.length - 1] === this.listStack[this.listStack.length - 1].length - 1) {
            this.listStack.pop();
            this.indexStack.pop();
        }
        if (this.indexStack.length === 0) {
            return ret;
        }
        this.goToNextAvailable(this.listStack[this.listStack.length - 1][++this.indexStack[this.indexStack.length - 1]]);
        return ret;
    }
    goToNextAvailable(ni) {
        while (this.indexStack.length > 0 && !ni.isInteger()) {
            let list = ni.getList();
            if (list.length === 0) {
                while (this.indexStack.length > 0 && this.indexStack[this.indexStack.length - 1] === this.listStack[this.listStack.length - 1].length - 1) {
                    this.listStack.pop();
                    this.indexStack.pop();
                }
                if (this.indexStack.length === 0) {
                    return;
                }
                ni = this.listStack[this.listStack.length - 1][++this.indexStack[this.indexStack.length - 1]];
            } else {
                this.listStack.push(list);
                this.indexStack.push(0);
                ni = list[0];
            }
        }
    }
};

module.exports = NestedIterator;

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/