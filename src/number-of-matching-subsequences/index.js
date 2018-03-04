/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
const numMatchingSubseq = function (S, words) {
    let indices = [];
    for (let i = 0; i < S.length; ++i) {
        let code = S.charCodeAt(i);
        if (!indices[code]) {
            indices[code] = [i];
        } else {
            indices[code].push(i);
        }
    }
    let matchedCount = 0;
    for (let word of words) {
        let curr = -1;
        let matched = true;
        for (let i = 0; i < word.length; ++i) {
            let charIndices = indices[word.charCodeAt(i)];
            if (!charIndices) {
                matched = false;
                break;
            }
            curr = binarySearch(curr, charIndices, 0, charIndices.length - 1);
            if (curr === -1) {
                matched = false;
                break;
            }
        }
        if (matched) {
            ++matchedCount;
        }
    }
    return matchedCount;
};

function binarySearch(prevIdx, charIndices, begin, end) {
    if (begin === end) {
        return charIndices[end] > prevIdx ? charIndices[end] : -1;
    }
    let mid = begin + end >> 1;
    return charIndices[mid] > prevIdx ?
        binarySearch(prevIdx, charIndices, begin, mid) :
        binarySearch(prevIdx, charIndices, mid + 1, end);
}

module.exports = numMatchingSubseq;