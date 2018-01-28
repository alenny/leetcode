class PrefixNode {
    constructor(sum) {
        this.sum = sum;
        this.subMap = new Map();
    }
}

class MapSum {
    constructor() {
        this.prefixMap = new Map();
        this.keyMap = new Map();
    }
    /** 
     * @param {string} key 
     * @param {number} val
     * @return {void}
     */
    insert(key, val) {
        let oldVal = this.keyMap.get(key);
        this.keyMap.set(key, val);
        let added = oldVal === undefined ? val : val - oldVal;
        let currMap = this.prefixMap;
        for (let ch of key) {
            let node = currMap.get(ch);
            if (!node) {
                node = new PrefixNode(added);
                currMap.set(ch, node);
            } else {
                node.sum += added;
            }
            currMap = node.subMap;
        }
    }
    /** 
     * @param {string} prefix
     * @return {number}
     */
    sum(prefix) {
        let currMap = this.prefixMap, node;
        for (let ch of prefix) {
            node = currMap.get(ch);
            if (!node) {
                return 0;
            }
            currMap = node.subMap;
        }
        return node ? node.sum : 0;
    }
}

module.exports = MapSum;

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */