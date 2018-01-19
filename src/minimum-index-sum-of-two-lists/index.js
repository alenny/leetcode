/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = function (list1, list2) {
    let map1 = new Map();
    let ret = [];
    let minIndexSum = Number.POSITIVE_INFINITY;
    for (let i = 0; i < list1.length; ++i) {
        map1.set(list1[i], i);
    }
    for (let i = 0; i < list2.length; ++i) {
        let idx1 = map1.get(list2[i]);
        if (idx1 === undefined) {
            continue;
        }
        let idxSum = idx1 + i;
        if (idxSum === minIndexSum) {
            ret.push(list2[i]);
        } else if (idxSum < minIndexSum) {
            ret = [list2[i]];
            minIndexSum = idxSum;
        }
    }
    return ret;
};

module.exports = findRestaurant;