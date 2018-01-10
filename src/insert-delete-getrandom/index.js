/**
 * Initialize your data structure here.
 */
class RandomizedSet {
    constructor() {
        this.map = new Map();
        this.arr = [];
        this.length = 0;
    }
    insert(val) {
        if (this.map.has(val)) {
            return false;
        }
        this.map.set(val, this.length);
        this.arr[this.length] = val;
        ++this.length;
        return true;
    }
    remove(val) {
        if (!this.map.has(val)) {
            return false;
        }
        let idx = this.map.get(val);
        this.map.delete(val);
        if (idx < this.length - 1) {
            this.arr[idx] = this.arr[this.length - 1];
            this.map.set(this.arr[idx], idx);
        }
        --this.length;
        return true;
    }
    getRandom() {
        return this.arr[Math.floor(Math.random() * this.length)];
    }
}

module.exports = RandomizedSet;

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */