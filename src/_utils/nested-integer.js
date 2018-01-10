class NestedInteger {
    constructor(integer, list) {
        this.integer = integer;
        this.list = list;
    }
    isInteger() {
        return this.integer !== undefined;
    }
    getInteger() {
        return this.integer;
    }
    getList() {
        return this.list;
    }
}

module.exports = NestedInteger;