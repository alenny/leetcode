/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaximumXORByTrie = function (nums) {
    let trieRoot = [];
    for (let num of nums) {
        let n = num;
        let currNode = trieRoot;
        for (let i = 0; i < 32; ++i) {
            if (n & 0x80000000) {
                if (!currNode[1]) {
                    currNode[1] = [];
                }
                currNode = currNode[1];
            } else {
                if (!currNode[0]) {
                    currNode[0] = [];
                }
                currNode = currNode[0];
            }
            n <<= 1;
        }
        currNode.push(num);
    }
    return findNext(trieRoot, trieRoot, 0);
};

function findNext(first, second, idx) {
    if (idx === 32) {
        return first[first.length - 1] ^ second[second.length - 1];
    }
    let ret = 0;
    if (first[0] && second[1]) {
        let tmp = findNext(first[0], second[1], idx + 1);
        ret = Math.max(ret, tmp);
    }
    if (first[1] && second[0] && first !== second) {
        let tmp = findNext(first[1], second[0], idx + 1);
        ret = Math.max(ret, tmp);
    }
    if (ret > 0) {
        return ret;
    }
    if (first[0] && second[0]) {
        let tmp = findNext(first[0], second[0], idx + 1);
        ret = Math.max(ret, tmp);
    }
    if (first[1] && second[1]) {
        let tmp = findNext(first[1], second[1], idx + 1);
        ret = Math.max(ret, tmp);
    }
    return ret;
}

const findMaximumXOR = function (nums) {
    let mask = 0, max = 0;
    for (let i = 31; i >= 0; --i) {
        mask |= (1 << i);
        let prefixSet = new Set();
        for (let num of nums) {
            prefixSet.add(num & mask);
        }
        let tmpMax = max | (1 << i);
        for (let prefix of prefixSet) {
            if (prefixSet.has(tmpMax ^ prefix)) {
                max = tmpMax;
                break;
            }
        }
    }
    return max;
};

module.exports = findMaximumXOR;