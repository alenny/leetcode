class NestedInteger {
    constructor(integer, list) {
        this.integer = integer;
        this.list = list || [];
    }
    isInteger() {
        return this.integer !== undefined;
    }
    getInteger() {
        return this.integer;
    }
    setInteger(value) {
        this.integer = value;
    }
    add(elem) {
        this.integer = undefined;
        if (!this.list) {
            this.list = [elem];
        } else {
            this.list.push(elem);
        }
    }
    getList() {
        return this.list;
    }
}

module.exports = NestedInteger;