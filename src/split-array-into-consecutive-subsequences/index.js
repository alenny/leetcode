/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isPossible = function (nums) {
    if (nums.length < 3) {
        return false;
    }
    let ni = 0, seqCounts = [];
    while (ni < nums.length) {
        let num = nums[ni], sameBegin = ni;
        while (ni < nums.length && nums[ni] === num) {
            ++ni;
        }
        let sameCount = ni - sameBegin;
        if (sameBegin > 0 && num !== nums[sameBegin - 1] + 1) {
            if (!verifySeqCounts(seqCounts, nums[sameBegin - 1])) {
                return false;
            }
            seqCounts = [{ beginNum: num, count: sameCount }];
        } else {
            let sci = seqCounts.length - 1;
            while (sci >= 0) {
                if (sameCount < seqCounts[sci].count) {
                    if (nums[sameBegin - 1] - seqCounts[sci].beginNum < 2) {
                        return false;
                    }
                    if (sameCount === 0) {
                        ++sci;
                    } else {
                        seqCounts[sci].count = sameCount;
                        sameCount = 0;
                    }
                    break;
                }
                sameCount -= seqCounts[sci].count;
                --sci;
            }
            if (sameCount > 0) {
                seqCounts.push({ beginNum: num, count: sameCount });
            } else if (sci > 0) {
                seqCounts.splice(0, sci);
            }
        }
    }
    return verifySeqCounts(seqCounts, nums[nums.length - 1]);
};

function verifySeqCounts(seqCounts, endNum) {
    return endNum - seqCounts[seqCounts.length - 1].beginNum >= 2;
}

module.exports = isPossible;