/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function (chars) {
    let storeIdx = 0, scanIdx = 1, currChar = chars[0], currCount = 1;
    while (scanIdx < chars.length) {
        if (chars[scanIdx] === currChar) {
            ++currCount;
        } else {
            storeIdx = storeCompressedString(chars, storeIdx, currChar, currCount);
            currChar = chars[scanIdx];
            currCount = 1;
        }
        ++scanIdx;
    }
    return storeCompressedString(chars, storeIdx, currChar, currCount);
};

function storeCompressedString(chars, storeIdx, currChar, currCount) {
    chars[storeIdx++] = currChar;
    if (currCount > 1) {
        let digits = '';
        while (currCount > 0) {
            digits = (currCount % 10).toString() + digits;
            currCount = Math.floor(currCount / 10);
        }
        for (let ch of digits) {
            chars[storeIdx++] = ch;
        }
    }
    return storeIdx;
}

module.exports = compress;