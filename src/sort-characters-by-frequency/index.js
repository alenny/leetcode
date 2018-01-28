/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function (s) {
    let map = new Map();
    for (let ch of s) {
        let count = map.get(ch);
        map.set(ch, count ? count + 1 : 1);
    }
    let chs = Array.from(map.entries());
    chs.sort((a, b) => b[1] - a[1]);    // sort by count
    let ret = [];
    for (let pair of chs) {
        for (let i = 0; i < pair[1]; ++i) {
            ret.push(pair[0]);
        }
    }
    return ret.join('');
};

module.exports = frequencySort;