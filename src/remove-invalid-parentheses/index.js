/**
 * @param {string} s
 * @return {string[]}
 */
const removeInvalidParentheses = function (s) {
    let results = new Set();
    let afterRemoveRight = removeInvalidRight(s);
    for (let ss of afterRemoveRight) {
        let afterRemoveLeft = removeInvalidLeft(ss);
        for (let sss of afterRemoveLeft) {
            results.add(sss);
        }
    }
    return Array.from(results);
};

function removeInvalidRight(s) {
    let rightPoses = [];
    let exceedPosIndexes = [];
    let pos = 0;
    while (pos < s.length) {
        let leftCount = 0, rightCount = 0;
        while (pos < s.length && leftCount >= rightCount) {
            if (s[pos] === '(') {
                ++leftCount;
            } else if (s[pos] === ')') {
                rightPoses.push(pos);
                ++rightCount;
            }
            ++pos;
        }
        if (leftCount < rightCount) {
            exceedPosIndexes.push(rightPoses.length - 1);
        }
    }
    return fixRight(s, rightPoses, exceedPosIndexes, rightPoses.length, exceedPosIndexes.length);
}

function fixRight(s, rightPoses, exceedPosIndexes, lastRightIndex, lastExceedIndex) {
    if (exceedPosIndexes.length === 0 || lastExceedIndex === 0) {
        return new Set([s]);
    }
    let fixed = new Set();
    let thisRightIndexMax = Math.min(lastRightIndex - 1, exceedPosIndexes[lastExceedIndex - 1]);
    for (let thisRightIndex = thisRightIndexMax; thisRightIndex >= lastExceedIndex - 1; --thisRightIndex) {
        let rightPos = rightPoses[thisRightIndex];
        let fixedString = s.substring(0, rightPos) + s.substring(rightPos + 1);
        let moreFixed = fixRight(fixedString, rightPoses, exceedPosIndexes, thisRightIndex, lastExceedIndex - 1);
        for (let fs of moreFixed) {
            fixed.add(fs);
        }
    }
    return fixed;
}

function removeInvalidLeft(s, end) {
    let leftPoses = [];
    let exceedPosIndexes = [];
    let pos = s.length - 1;
    while (pos >= 0) {
        let leftCount = 0, rightCount = 0;
        while (pos >= 0 && rightCount >= leftCount) {
            if (s[pos] === '(') {
                leftPoses.push(pos);
                ++leftCount;
            } else if (s[pos] === ')') {
                ++rightCount;
            }
            --pos;
        }
        if (leftCount > rightCount) {
            exceedPosIndexes.push(leftPoses.length - 1);
        }
    }
    return fixLeft(s, leftPoses, exceedPosIndexes, -1, -1);
}

function fixLeft(s, leftPoses, exceedPosIndexes, lastLeftIndex, lastExceedIndex) {
    if (exceedPosIndexes.length === 0 || lastExceedIndex === exceedPosIndexes.length - 1) {
        return new Set([s]);
    }
    let fixed = new Set();
    for (let thisLeftIndex = lastLeftIndex + 1; thisLeftIndex <= exceedPosIndexes[lastExceedIndex + 1]; ++thisLeftIndex) {
        let leftPos = leftPoses[thisLeftIndex];
        let fixedString = s.substring(0, leftPos) + s.substring(leftPos + 1);
        let moreFixed = fixLeft(fixedString, leftPoses, exceedPosIndexes, thisLeftIndex, lastExceedIndex + 1);
        for (let fs of moreFixed) {
            fixed.add(fs);
        }
    }
    return fixed;
}

module.exports = removeInvalidParentheses;