/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }
    if (needle.length > haystack.length) {
        return -1;
    }
    // KMP algorithm
    let lps = getLP(needle);
    let hi = 0, ni = 0;
    while (hi < haystack.length) {
        while (ni < needle.length && hi < haystack.length && haystack[hi] === needle[ni]) {
            ++hi;
            ++ni;
        }
        if (ni === needle.length) {
            return hi - ni;
        }
        if (ni === 0) {
            ++hi;
            continue;
        }
        ni = lps[ni - 1];
    }
    return -1;
};

function getLP(needle) {
    let lps = new Array(needle.length);
    lps[0] = 0;
    let len = 0, i = 1;
    while (i < needle.length) {
        if (needle[len] === needle[i]) {
            lps[i++] = ++len;
            continue;
        }
        if (len === 0) {
            lps[i++] = 0;
            continue;
        }
        len = lps[len - 1];
    }
    return lps;
}

module.exports = strStr;