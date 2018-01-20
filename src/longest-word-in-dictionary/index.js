/**
 * @param {string[]} words
 * @return {string}
 */
const longestWord = function (words) {
    let ret = '';
    let dict = new Map();
    for (let w of words) {
        let curDict = dict;
        for (let ch of w) {
            let subDict = curDict.get(ch);
            if (!subDict) {
                subDict = new Map();
                curDict.set(ch, subDict);
            }
            curDict = subDict;
        }
        curDict.set('0', null);
    }
    for (let w of words) {
        let curDict = dict;
        let found = true;
        for (let ch of w) {
            let subDict = curDict.get(ch);
            if (!subDict || !subDict.has('0')) {
                found = false;
                break;
            }
            curDict = subDict;
        }
        if (found && (w.length > ret.length || w.length === ret.length && w < ret)) {
            ret = w;
        }
    }
    return ret;
};

module.exports = longestWord;