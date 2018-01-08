/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    if (!strs || strs.length === 0) {
        return '';
    }
    let prefix = '';
    let idx = 0;
    while (true) {
        if (idx > strs[0].length - 1) {
            return prefix;
        }
        let ch = strs[0][idx];
        for (let n = 1; n < strs.length; ++n) {
            if (idx > strs[n].length - 1 || strs[n][idx] != ch) {
                return prefix;
            }
        }
        prefix += ch;
        ++idx;
    }
    return prefix;
};

module.exports = longestCommonPrefix;
