/**
 * @param {string[]} words
 * @return {number}
 */
const maxProductByMapSet = function (words) {
    words.sort((a, b) => b.length - a.length);
    let idxMap = new Map();
    let maxProd = 0;
    for (let i = 0; i < words.length; ++i) {
        let excludeSet = new Set();
        for (let ch of words[i]) {
            let idxSet = idxMap.get(ch);
            if (!idxSet) {
                idxSet = new Set();
                idxMap.set(ch, idxSet);
            } else {
                idxSet.forEach(v => excludeSet.add(v));
            }
            idxSet.add(i);
        }
        let jLen = 0;
        for (let j = 0; j < i; ++j) {
            if (!excludeSet.has(j)) {
                jLen = words[j].length;
                break;
            }
        }
        if (jLen > 0) {
            let prod = jLen * words[i].length;
            if (prod > maxProd) {
                maxProd = prod;
            }
        }
    }
    return maxProd;
};

const maxProduct = function (words) {
    // Use bits as flag
    const A_CODE = 'a'.charCodeAt(0);
    let flags = new Array(words.length);
    flags.fill(0);
    for (let i = 0; i < words.length; ++i) {
        for (let j = 0; j < words[i].length; ++j) {
            flags[i] |= (1 << words[i].charCodeAt(j) - A_CODE);
        }
    }
    let maxProd = 0;
    for (let i = 0; i < words.length; ++i) {
        for (let j = i + 1; j < words.length; ++j) {
            if ((flags[i] & flags[j]) === 0) {
                let prod = words[i].length * words[j].length;
                if (prod > maxProd) {
                    maxProd = prod;
                }
            }
        }
    }
    return maxProd;
};

module.exports = maxProduct;