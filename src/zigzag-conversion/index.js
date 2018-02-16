/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }
    let retChars = [];
    let groupLen = numRows * 2 - 2;
    let fullGroups = Math.floor(s.length / groupLen);
    let finalPosInGroup = (s.length - 1) % groupLen;
    for (let i = 0; i < s.length; ++i) {
        let newIdx = calNewIdx(s.length, numRows, groupLen, fullGroups, finalPosInGroup, i);
        retChars[newIdx] = s[i];
    }
    return retChars.join('');
};

function calNewIdx(textLen, numRows, groupLen, fullGroups, finalPosInGroup, idx) {
    let group = Math.floor(idx / groupLen);
    let posInGroup = idx % groupLen;
    let row = posInGroup < numRows ? posInGroup : groupLen - posInGroup;
    if (row === 0) {
        return group;
    }
    // 0 < row < numRows-1
    let newIdx = finalPosInGroup < groupLen - 1 ? fullGroups + 1 : fullGroups;
    for (let r = 1; r < row; ++r) {
        newIdx += fullGroups * 2;
        if (r <= finalPosInGroup) {
            ++newIdx;
        }
        if (r >= groupLen - finalPosInGroup) {
            ++newIdx;
        }
    }
    if (row === numRows - 1) {
        newIdx += group;
    } else {
        newIdx += group * 2;
        if (posInGroup >= numRows) {
            ++newIdx;
        }
    }
    return newIdx;
}

module.exports = convert;