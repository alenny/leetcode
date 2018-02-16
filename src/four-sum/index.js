/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
    let twoSumMap = new Map();
    for (let i = 0; i < nums.length; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            let sum = nums[i] + nums[j];
            let subMap = twoSumMap.get(sum);
            if (!subMap) {
                subMap = new Map();
                twoSumMap.set(sum, subMap);
            }
            let subSet = subMap.get(i);
            if (!subSet) {
                subSet = new Set();
                subMap.set(i, subSet);
            }
            subSet.add(j);
        }
    }
    let resultMap = new Map();
    for (let pair of twoSumMap) {
        s0 = pair[0];
        s1 = target - s0;
        if (s0 > s1) {
            continue;
        }
        if (s0 === s1) {
            let subMap = pair[1];
            let subPairs = Array.from(subMap.entries());
            for (let m = 0; m < subPairs.length; ++m) {
                let i0 = subPairs[m][0];
                for (let i1 of subPairs[m][1]) {
                    for (let n = m + 1; n < subPairs.length; ++n) {
                        let i2 = subPairs[n][0];
                        for (let i3 of subPairs[n][1]) {
                            addToResultMap(resultMap, nums, i0, i1, i2, i3);
                        }
                    }
                }
            }
            continue;
        }
        // s0 < s1
        let subMap1 = twoSumMap.get(s1);
        if (!subMap1) {
            continue;
        }
        for (let subPair0 of pair[1]) {
            let i0 = subPair0[0];
            for (let i1 of subPair0[1]) {
                for (let subPair1 of subMap1) {
                    let i2 = subPair1[0];
                    for (let i3 of subPair1[1]) {
                        addToResultMap(resultMap, nums, i0, i1, i2, i3);
                    }
                }
            }
        }
    }
    return mapToArray(resultMap);
};

function addToResultMap(resultMap, nums, ...indices) {
    if (areIndicesDuplicate(indices)) {
        return;
    }
    let solution = [];
    indices.forEach(idx => solution.push(nums[idx]));
    solution.sort((a, b) => a - b);
    let map = resultMap;
    for (let i = 0; i < 3; ++i) {
        let subMap = map.get(solution[i]);
        if (!subMap) {
            subMap = new Map();
            map.set(solution[i], subMap);
        }
        map = subMap;
    }
    map.set(solution[3], 0);
}

function areIndicesDuplicate(indices) {
    let set = new Set();
    indices.forEach(idx => set.add(idx));
    return set.size < indices.length;
}

function mapToArray(resultMap) {
    let ret = [];
    let solution = [];
    for (let pair0 of resultMap) {
        solution.push(pair0[0]);
        for (let pair1 of pair0[1]) {
            solution.push(pair1[0]);
            for (let pair2 of pair1[1]) {
                solution.push(pair2[0]);
                for (let pair3 of pair2[1]) {
                    solution.push(pair3[0]);
                    ret.push(solution.slice());
                    solution.pop();
                }
                solution.pop();
            }
            solution.pop();
        }
        solution.pop();
    }
    return ret;
}

module.exports = fourSum;